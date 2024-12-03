import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        <p><a href="#">farbodshamloo.js</a> | React.js</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Farbod with ❤️</p>
    </footer>
    </>
  )
}

export default Layout