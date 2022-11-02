import { Typography, Input, Col, Row, Select, Button, Form, message } from 'antd'
import { useState } from 'react';

const { Search } = Input;
const { Title, Text } = Typography;

const MySearch = () => {
    const [progress, setProgress] = useState(1) // 进度
    const [url, setUrl] = useState('') // 链接
    const [loading, setLoading] = useState(false)

    const onSearch = (text) => {
        console.log(text)
        if (text) {
            setProgress(2)
        }
    }

    const submit = (formData) => {
        setLoading(true)
        const req = { ...formData, url }
        console.log(req)

        if (Math.random() > .5) {
            message.success('提交成功')
        } else {
            message.error('url或邮箱无效')
        }

        setTimeout(() => {
            setLoading(false)
        }, 500)
    }

    return (
        <Row>
        {
            progress === 1 ? (<>
                <Col span={24}>
                    <Title level={2} style={{ textAlign: 'center', padding: '135px 0 60px 0' }}>获取商品评论分析报告</Title>
                </Col>

                <Col md={6} lg={6} xl={7} />
                <Col md={12} lg={12} xl={10}>
                    <Input.Group compact>
                        <Select size="large" style={{ width: 135 }} options={[{ label: 'Amazon US', value: 'Amazon US' }]} value={'Amazon US'} />
                        <Search
                            size="large"
                            style={{ width: 'calc(100% - 135px)' }}
                            placeholder="商品页链接"
                            allowClear
                            enterButton="分析"
                            onSearch={onSearch}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Input.Group>
                </Col>
                <Col md={6} lg={6} xl={7} />
            </>) : (<>
                <Col span={24}>
                    <Typography style={{ textAlign: 'center', width: '100%', marginBottom: 60, paddingTop: 135 }}>
                        <Text style={{ fontSize: 20 }}>服务器繁忙，采集数据耗时较久，请留下邮箱地址。分析完成后，会发送报告至您的邮箱：</Text>
                    </Typography>
                </Col>

                <Col md={6} lg={6} xl={7} />
                <Col md={12} lg={12} xl={10}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form style={{ width: '100%' }} onFinish={submit}>
                            <Form.Item name='eMail' rules={[{ required: true, message: '请输入' }]}>
                                <Input placeholder='输入邮箱' size='large' style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item name='eMail' style={{ textAlign: 'center' }}>
                                <Button
                                    type="primary"
                                    size='large'
                                    style={{ width: 130, marginTop: 20 }}
                                    htmlType="submit"
                                    loading={loading}
                                >提交</Button>
                            </Form.Item>
                        </Form>
                        
                    </div>
                </Col>
                <Col md={6} lg={6} xl={7} />
            </>)
        }
    </Row>
    )
}

export default MySearch
