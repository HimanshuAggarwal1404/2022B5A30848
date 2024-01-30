import React from 'react'
import styles from "../Styles/Home.module.scss"
import Header from '../Components/Header'
const Home = () => {
  return (
    <>
    <div className={styles.mainWrapper}>
<Header/>
<div className={styles.section1}></div>
    </div>
    </>
  )
}

export default Home