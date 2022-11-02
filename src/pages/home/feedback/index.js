import { Typography, Input, Card, Space, Modal, Form } from 'antd'
import { MessageOutlined } from '@ant-design/icons';
import styles from '../index.module.scss'
import { useState, useEffect } from 'react'

const { Text } = Typography;

const Feedback = () => {
    const [isShow, setIsShow] = useState(false)
    const [form] = Form.useForm() // form实例

    useEffect(() => {
        if (!isShow) return
        form.resetFields()
    }, [isShow])

    const onFinish = (formData) => {
        console.log(formData)
        setIsShow(false)
    }

    return (<>
        <Card hoverable className={styles['feedback']} onClick={() => setIsShow(true)}>
            <Space direction="vertical" align="center">
                <MessageOutlined style={{ fontSize: 25 }} />
                <Text>点击反馈</Text>
            </Space>
        </Card>

        <Modal
            title="问题反馈"
            open={isShow}
            onOk={form.submit}
            onCancel={() => setIsShow(false)}
        >
            <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} scrollToFirstError>
                <Form.Item label="联系方式" name="phone" rules={[{ required: true, message: '请输入' }]}>
                    <Input allowClear placeholder={'邮箱/手机号'} />
                </Form.Item>

                <Form.Item label="问题描述" name="text" rules={[{ required: true, message: '请输入' }]}>
                    <Input.TextArea allowClear placeholder={'请描述您遇到的问题，我们会及时处理'} showCount maxLength={100} autoSize={{ minRows: 4 }} />
                </Form.Item>
            </Form>
        </Modal>
    </>)
}

export default Feedback