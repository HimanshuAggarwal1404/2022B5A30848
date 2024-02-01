import React from 'react'
import styles from "../Styles/CarouselCard.module.scss"
const CarouselCard = (props) => {
  return (
    <div>
        <div className={styles.card}>
            {props.a}
        </div>
    </div>
  )
}

export default CarouselCard