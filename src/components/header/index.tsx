import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Logo</div>
        <nav>item1</nav>
      </div>
    </div>
  )
}
