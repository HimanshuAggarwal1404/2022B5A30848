import React, {useState} from 'react'
import styles from "../Styles/ServicesCard.module.scss"
const ServicesCard = (props) => {
    const [isHovering, setIsHovering] = useState(false)
    const changeHoverTrue = () => {
        setIsHovering(true)
    }
    const changeHoverFalse = () => {
        setIsHovering(false)
    }
  return (
    <div className={styles.CardWrapper} onMouseEnter={changeHoverTrue} onMouseLeave={changeHoverFalse} style={{border:isHovering?"4px solid white":"4px solid #FFA588", backgroundColor:isHovering?"white":"transparent"}}>
        <div className={styles.imageWrapper}><img style={{filter:isHovering?"brightness(0) saturate(100%)":"none"}} src={props.img} alt={props.title} /></div>
        <div className={styles.title} style={{color:isHovering?"black":"#FFA588"}}>{props.title}</div>
        <div className={styles.desc}style={{color:isHovering?"black":"white"}}>{props.desc}</div>
    </div>
  )
}

export default ServicesCard