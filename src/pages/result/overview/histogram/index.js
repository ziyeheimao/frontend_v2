import styles from './index.module.scss'
import { Progress } from 'antd'

const Histogram = (props) => {
    const { width, data = [] } = props

    return (
        <div style={{ width }} className={styles.histogram}>
            {
                data.map(v => (
                    <section key={v.label} className={styles.col}>
                        <div className={styles.left}>{v.label}</div>

                        <div className={styles.middle}>
                            <Progress percent={v.value} showInfo={false} strokeLinecap="butt" />
                        </div>

                        <div className={styles.rigth}>{v.value}%</div>
                    </section>
                ))
            }
        </div>
    )
}

export default Histogram
