import styles from '../index.module.scss'
import { Space, Typography, Table, Rate, Row, Col } from 'antd';
import { useState } from 'react'
import Histogram from './histogram'
import Star from './star'

const { Text, Title } = Typography;

const Page = ({ spacing }) => {
    const [tableData] = useState([ // setTableData
        {
            id: 1,
            Stars: 4.5,
            Brand: 'Jackery',
            price: '$299',
            ratings: 5318,
            ASIN: 'B082TMBYR6',
            Rank: '#330 in Patio, Lawn & Garden (See Top 100 in Patio, Lawn & Garden)',
        }
    ])

    const columns = [
        { title: 'Stars', dataIndex: 'Stars', width: 170, render: (v, row) => <Rate value={v} allowHalf disabled />, },
        { title: 'Brand', dataIndex: 'Brand' },
        { title: 'price', dataIndex: 'price' },
        { title: 'ratings', dataIndex: 'ratings' },
        { title: 'ASIN', dataIndex: 'ASIN' },
        { title: 'Rank', dataIndex: 'Rank' },
    ]


    return (
        <Space className={styles.overview} direction="vertical" size={spacing}>
            <Row>
                <Col span={24}>
                    <Title level={5}>Overview</Title>
                </Col>
                <Col span={24}>
                    <Text>Jackery Portable Power Station Explorer 300, 293Wh Backup Lithium Battery, 110V/300w Pure Sine Wave Outlet, Solar Generator (Solar Panel Not Included) for Outdoors Camping Travel Hunting Blackout</Text>
                </Col>
            </Row>

            <Table
                columns={columns}
                dataSource={tableData}
                rowKey={row => row.id}
                pagination={false}
            />

            <Row>
                <Col span={24}>
                    <Title level={5}>Customer reviews</Title>
                </Col>

                <Col span={1} />
                <Col span={22}>
                    <Histogram
                        width={500}
                        data={[
                            { label: '5 star', value: 87 },
                            { label: '4 star', value: 8 },
                            { label: '3 star', value: 3 },
                            { label: '2 star', value: 2 },
                            { label: '1 star', value: 2 },
                        ]}
                    />
                </Col>
            </Row>


            <Row>
                <Col span={24}>
                    <Title level={5}>By feature</Title>
                </Col>

                <Col span={1} />
                <Col span={22}>
                    <Star
                        width={290}
                        data={[
                            { label: 'Light weight', value: 4.8 },
                            { label: 'Portability', value: 4.8 },
                            { label: 'Maneuverability', value: 4.7 },
                            { label: 'Charging power', value: 4.5 },
                        ]}
                    />
                </Col>
            </Row>
        </Space>
    )
}

export default Page
