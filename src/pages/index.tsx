import Link from 'next/link'
import styles from '../styles/top.module.scss'

export default function Main() {
  return (
      <div id={styles.content}>
        <div id={styles.wrapper}>
          <h1>RoadMapper</h1>
          <div id={styles.subWrapper}>
            <p id={styles.subTitle}>新しい学びに<br/>最適な手順を提供</p>
            <Link href="/main" id={styles.subText}>＞試してみる</Link>
          </div>
        </div>
      </div>
  )
}
