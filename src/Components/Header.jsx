import React from 'react'
import styles from "../Styles/Header.module.scss"
const Header = () => {
  return (
    <>
    <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>Logo</div>
        <div className={styles.navbar}>Lorem ipsum dolor sit amet.</div>
    </div>
    </>
  )
}

export default Header