import { Typography, Col, Row, Card, Badge } from 'antd'
import styles from '../index.module.scss'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography;

const List = () => {
    const navigate = useNavigate()

    const toResult = () => {
        navigate('/result?type=Overview')
    }

    return (
        <Row style={{ marginTop: 100 }}>
            <Col md={2} lg={2} xl={4} xxl={6} />
            <Col md={20} lg={20} xl={16} xxl={12} >
                <div className={styles['box']}>
                    <Badge.Ribbon text="报告样本" style={{ width: '30%' }}>
                        <Card className={styles['card']} hoverable onClick={toResult}>
                            <Text>Rokid Air Glasses</Text>
                        </Card>
                    </Badge.Ribbon>

                    <Badge.Ribbon text="报告样本" style={{ width: '30%' }}>
                        <Card className={styles['card']} hoverable onClick={toResult}>
                            <Text>Apple Watch</Text>
                        </Card>
                    </Badge.Ribbon>

                    <Badge.Ribbon text="报告样本" style={{ width: '30%' }}>
                        <Card className={styles['card']} hoverable onClick={toResult}>
                            <Text>Jackery Portable power station</Text>
                        </Card>
                    </Badge.Ribbon>
                </div>
            </Col>
            <Col md={2} lg={2} xl={4} xxl={6} />
        </Row>
    )
}

export default List
