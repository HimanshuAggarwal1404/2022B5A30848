import React, {useState} from "react";
import styles from "../Styles/Header.module.scss";
const Header = () => {
    const [WhiteLineHome, setWhiteLineHome] = useState(false);
    const [WhiteLineAbout, setWhiteLineAbout] = useState(false);
    const [WhiteLineServices, setWhiteLineServices] = useState(false);
    const [WhiteLineContact, setWhiteLineContact] = useState(false);
    const changeWhiteLineHome = () => {
        setWhiteLineHome(true);
        setWhiteLineAbout(false);
        setWhiteLineServices(false);
        setWhiteLineContact(false);
    }
    const changeWhiteLineAbout = () => {
        setWhiteLineHome(false);
        setWhiteLineAbout(true);
        setWhiteLineServices(false);
        setWhiteLineContact(false);
    }
    const changeWhiteLineServices = () => {
        setWhiteLineHome(false);
        setWhiteLineAbout(false);
        setWhiteLineServices(true);
        setWhiteLineContact(false);
    }
    const changeWhiteLineContact = () => {
        setWhiteLineHome(false);
        setWhiteLineAbout(false);
        setWhiteLineServices(false);
        setWhiteLineContact(true);
    }
    const turnoff = () =>{
        setWhiteLineHome(false);
        setWhiteLineAbout(false);
        setWhiteLineServices(false);
        setWhiteLineContact(false);
    }
  return (
    <>
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>Logo</div>
        <div className={styles.navbar}>
          <div className={styles.navbarComponent} onMouseOver={changeWhiteLineHome} onMouseLeave={turnoff}>
            <div className={styles.title}>Home</div>
            <div className={styles.whiteLineWrapper}>
              <div className={styles.whiteLine} style={{width:WhiteLineHome?"30%":"0%"}}></div>
            </div>
          </div>
          <div className={styles.navbarComponent} onMouseOver={changeWhiteLineAbout} onMouseLeave={turnoff}>
            <div className={styles.title}>About</div>
            <div className={styles.whiteLineWrapper}>
              <div className={styles.whiteLine} style={{width:WhiteLineAbout?"30%":"0%"}}></div>
            </div>
          </div>
          <div className={styles.navbarComponent} onMouseOver={changeWhiteLineServices} onMouseLeave={turnoff}>
            <div className={styles.title}>Services</div>
            <div className={styles.whiteLineWrapper}>
              <div className={styles.whiteLine} style={{width:WhiteLineServices?"30%":"0%"}}></div>
            </div>
          </div>
          <div className={styles.navbarComponent} onMouseOver={changeWhiteLineContact} onMouseLeave={turnoff}>
            <div className={styles.title}>Contact</div>
            <div className={styles.whiteLineWrapper}>
              <div className={styles.whiteLine} style={{width:WhiteLineContact?"30%":"0%"}}></div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
