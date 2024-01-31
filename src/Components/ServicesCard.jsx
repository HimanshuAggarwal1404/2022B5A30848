import React from 'react'
import styles from "../Styles/ServicesCard.module.scss"
const ServicesCard = (props) => {
  return (
    <div className={styles.CardWrapper}>
        <div className={styles.imageWrapper}><img src={props.img} alt={props.title} /></div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.desc}>{props.desc}</div>
    </div>
  )
}

export default ServicesCard