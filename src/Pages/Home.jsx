import React from 'react'
import styles from "../Styles/Home.module.scss"
import Header from '../Components/Header'
const Home = () => {
  return (
    <>
    <div className={styles.mainWrapper}>
<Header/>
<div className={styles.section1}>
  <div className={styles.socialMedia}>
    <div className={styles.verticalLine}><div className={styles.line}></div></div>
    <div className={styles.handles}>
      <div><i class="fa-brands fa-behance"></i></div>
      <div><i class="fa-brands fa-dribbble"></i></div>
      <div><i class="fa-brands fa-instagram"></i></div>
    </div>
    <div className={styles.verticalLine}><div className={styles.line}></div></div>
  </div>
  <div className={styles.mainTitle}></div>
</div>
    </div>
    </>
  )
}

export default Home