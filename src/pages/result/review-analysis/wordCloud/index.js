import { WordCloud } from '@antv/g2plot';
import { useState, useEffect, memo } from 'react';
import { Drawer, List, Tag } from 'antd'
import _ from 'lodash'
import { LinkOutlined } from '@ant-design/icons'
import bg from './bg.jpg'

const Page = memo(({ data, color, colorField }) => {
    const [cahrt, setCahrt] = useState(null)
    const [desTitle, setDesTitle] = useState('')
    const [desNumber, setDesNumber] = useState(0)
    const [desList, setDesList] = useState([])
    const [showVisible, setShowVisible] = useState(false)
    const id = `id${Math.random}`

    useEffect(() => {
        init()
    }, [data, color])

    const _init = async () => {
        const options = {
            data,
            width: 900,
            height: 600,
            wordField: 'x',
            weightField: 'value',
            color,
            colorField: 'category',

            imageMask: bg,

            wordStyle: {
                fontFamily: 'Verdana',
                fontSize: [24, 80],
                // rotate: 45,
                rotation: [0],
                rotationSteps: 3,
            },

            placementStrategy: {
                rotate: 0,
            },

            // 设置交互类型
            interactions: [{ type: 'element-active' }],
            state: {
                active: {
                // 这里可以设置 active 时的样式
                    style: {
                        lineWidth: 3,
                    },
                },
            },
        }

        if (cahrt === null) {
            const wordCloud = new WordCloud(id, options);

            // 添加点击事件
            wordCloud.on('click', (...args) => {
                console.log(...args);
                setShowVisible(true)
            });

            setCahrt(wordCloud)
            wordCloud.render(data)
        } else {
            cahrt.changeData(data)
        }
    }

    const init = _.debounce(_init, 500)


    return (
        <div style={{ textAlign: 'center' }}>
            <div id={id} style={{ height: 600, width: 900, display: 'inline-block' }} />

            <Drawer
                closable={false}
                onClose={() => {
                    setDesTitle('')
                    setDesNumber(0)
                    setDesList([])
                    setShowVisible(false)
                }}
                visible={showVisible}
            >
                <div>
                    <div className="detail-head">{desTitle}</div>
                    <div className="detail-title">
                        <span className="detail-title-left"></span>
                        <span className="ml10">统计</span>
                        <Tag className="ml20" color="success">
                        {desNumber}
                        </Tag>
                    </div>
                    <div className="detail-title">
                        <span className="detail-title-left"></span>
                        <span className="ml10">片段</span>
                    </div>
                    <div>
                        <List
                            dataSource={desList}
                            itemLayout="horizontal"
                            renderItem={item => {
                                const index = item.index.split(',')
                                const stringSource = item.clause.slice(Number(index[0]), Number(index[1]))
                                const start = item.clause.slice(0, Number(index[0]))
                                const end = item.clause.slice(Number(index[1]))

                                return (
                                    <List.Item
                                        actions={[<a href={item.link}><LinkOutlined /></a>]}>
                                        <div>
                                            {start}
                                            <span style={{ color: '#FFCC22' }}>{stringSource}</span>
                                            {end}
                                        </div>
                                    </List.Item>
                                )
                            }}
                        />
                    </div>
                </div>
            </Drawer>
        </div>
    )
})

export default Page
