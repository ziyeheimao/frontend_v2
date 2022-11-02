import styles from '../index.module.scss'
import { Space, Typography, Row, Col, Descriptions } from 'antd';

const { Title } = Typography;

const Page = ({ spacing }) => {
    return (
        <Space className={styles['product-details']} direction="vertical" size={spacing}>
            <Title level={5}>Product details</Title>

            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Descriptions title="" column={1} bordered style={{ width: '100%' }}>
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Typography>
                        SPEED UP YOUR RECHARGEABILITY: It takes only 2 hours to recharge 80% battery of the power station through the wall outlet and 60W PD USB-C port simultaneously. You can also recharge your power station with an AC adapator when at home, through the car outlet during a road trip or simply use a Jackery SolarSaga 100.

                        SAFE & STEADY POWER SUPPLY: Armed with a 293Wh lithium-ion battery pack, the Explorer 300 features 2 Pure Sine Wave AC outlets that deliver stable and safe 300W power. The portable power station weighs only 7.1 pounds. You can simply rest assured in outdoor off-grid activities.

                        POWER YOUR EXPECTATIONS: Featuring 2* AC outlet, 1* PD 60W USB-C port (input/output supported) , 1* fast charge 3.0 port, 1*USB-A port andl 1* DC car port, the power station can recharge itself and charge (up to) 6 devices (e.g.Drones, Macbook, Cameras, etc.) at the same time to satisfy your outdoor needs.

                        GREEN POWER SUPPLY: The power station is compatible with the Jackery SolarSaga 100 solar panel.

                        The integrated MPPT controller enables the solar generator set to operate at its max power point, so that it speeds up the battery recharge, making them ideal portable power kits for tent camping, overland journey and etc.

                        WHAT YOU GET: 1* Jackery Explorer 300 Portable Power Station , 1*AC adapter, 1* car charger cable, 1* user guide
                    </Typography>
                </Col>
            </Row>
        </Space>
    )
}

export default Page
