import Link from 'next/link'
import styles from '../styles/top.module.scss'
import Header from './module/Header';
import Footer from './module/Footer';

export default function Main() {
  return (
      <div id={styles.content}>
        <Header/>
        <div id={styles.wrapper}>
          <div id={styles.minwrapper}>
            <h1>新しい学びに<br/>最適な手順を提供</h1>
            <Link href="/main" id={styles.subText}>試してみる</Link>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
