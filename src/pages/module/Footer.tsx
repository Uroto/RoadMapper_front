import Link from 'next/link'
import styles from '../../styles/footer.module.scss'

export default function Footer() {
    return (
        <div id={styles.footer}>
            <p>© 2023 <Link href="https://github.com/0fk0">fk</Link> All rights reserved</p>
        </div>
    )
}