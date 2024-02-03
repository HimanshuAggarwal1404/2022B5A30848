import React from 'react'
import styles from "../Styles/CarouselCard.module.scss"
const CarouselCard = (props) => {
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.cardImage}> <img src={props.img} alt="" /></div>
            <div className={styles.cardContent}>
              <div className={styles.content}>{props.content}</div>
              <div className={styles.nameBox}>
                <div className={styles.line}></div>
                <div className={styles.name}>{props.name}</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CarouselCard