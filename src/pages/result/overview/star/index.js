import styles from './index.module.scss'
import { Rate } from 'antd'

const Star = (props) => {
    const { width, data = [] } = props

    return (
        <div style={{ width }} className={styles.star}>
            {
                data.map(v => (
                    <section key={v.label} className={styles.col}>
                        <div className={styles.left}>{v.label}</div>

                        <div className={styles.middle}>
                            <Rate value={v.value} allowHalf disabled />
                        </div>

                        <div className={styles.rigth}>{v.value}</div>
                    </section>
                ))
            }
        </div>
    )
}

export default Star
