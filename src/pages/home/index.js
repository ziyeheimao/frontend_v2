import styles from './index.module.scss'
import Feedback from './feedback'
import Search from './search'
import List from './list'


const Page = () => {
    return <div className={styles['home']}>
        {/* 搜索栏 */}
        <Search />

        {/* 样本列表 */}
        <List />

        {/* 反馈 */}
        <Feedback />
    </div>
}

export default Page
