import styles from './index.module.scss'
import { Layout, Menu } from 'antd'
import { useEffect, useState, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { queryStringToObj } from '../../tools'
import Overview from './overview'
import ProductDetails from './product-details'
import ReviewAnalysis from './review-analysis'

const { Sider, Content } = Layout;

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [selectedKeys, setSelectedKeys] = useState([])
    const SiderWidth = 256 // 左栏宽度


    // 左栏选中状态初始化
    useEffect(() => {
        const query = queryStringToObj(location.search)
        setSelectedKeys([query.type])
    }, [location.search])

    
    const menuData = [
        { label: 'Overview', key: 'Overview', render: <Overview spacing={40} /> },
        { label: 'Product details', key: 'Product details', render: <ProductDetails spacing={40} /> },
        { label: 'Review analysis', key: 'Review analysis', render: <ReviewAnalysis spacing={40} /> },
    ]

    // 根据侧栏的选项渲染对应的内容
    const myContent = useMemo(() => {
        if (selectedKeys.length) {
            const o = {}
            const key = selectedKeys[0]
            menuData.forEach(v => o[v.key] = v.render)
            return o[key]
        } else {
            return null
        }
    }, [selectedKeys])

    // 选择左栏
    const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        navigate(`/result?type=${key}`)
        setSelectedKeys([key])
    }

    return (
        <Layout className={styles.result}>
            <Sider className={styles.sider} width={SiderWidth}>
                {
                    selectedKeys.length ? (
                        <Menu
                            style={{ width: SiderWidth }}
                            defaultSelectedKeys={selectedKeys}
                            selectedKeys={selectedKeys}
                            onSelect={onSelect}
                            mode="inline"
                            items={menuData}
                        />
                    ) : null
                }
            </Sider>

            <Layout className={styles.layout}>
                <Content className={styles.content}>
                    {myContent}
                </Content>
            </Layout>
        </Layout>
    )
}

export default Result
