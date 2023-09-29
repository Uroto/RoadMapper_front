import styles from '../../styles/header.module.scss'
import Image from 'next/image';

export default function Header() {
    return (
        <div id={styles.header}>
            <Image src="/images/icon_48x48.ico" width="40" height="40" alt=''/>
            <h2>RoadMapper</h2>
        </div>
    )
}