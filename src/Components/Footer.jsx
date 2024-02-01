import React from "react";
import styles from "../Styles/Footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerWrapper}>
        <div className={styles.createdBy}>Created By Himanshu Aggarwal</div>
        <div className={styles.socialMedia}><i class="fa-brands fa-behance"></i>
                  <i class="fa-brands fa-dribbble"></i>
                  <i class="fa-brands fa-instagram"></i></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
