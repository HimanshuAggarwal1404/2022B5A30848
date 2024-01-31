import React, { useState } from "react";
import styles from "../Styles/Home.module.scss";
import Header from "../Components/Header";
import aboutMeImg from "../assets/aboutme.svg";
import Hacker from "../assets/Hacker-bro 1.svg";
const Home = () => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const changeHover1 = () => {
    setIsHovering1(!isHovering1);
  };
  const changeHover2 = () => {
    setIsHovering2(!isHovering2);
  };
  return (
    <>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.section1}>
          <div className={styles.socialMedia}>
            <div className={styles.verticalLine}>
              <div className={styles.line}></div>
            </div>
            <div className={styles.handles}>
              <div>
                <i class="fa-brands fa-behance"></i>
              </div>
              <div>
                <i class="fa-brands fa-dribbble"></i>
              </div>
              <div>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className={styles.verticalLine}>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.mainTitle}>
            <div className={styles.mainTitleText}>
              <div className={styles.titleSec1}>Hello, I am</div>
              <div className={styles.titleSec2}>PERSON ABC</div>
              <div className={styles.titleSec3}>
                Lorem ipsum dolor sit amet.
              </div>
              <div className={styles.titleSec4}>
                <button
                  className={styles.titleSec4But}
                  style={{
                    backgroundColor: isHovering1 ? "#202124" : "#FFA588",
                    color: isHovering1 ? "#FFA588" : "#202124",
                  }}
                  onMouseOver={changeHover1}
                  onMouseLeave={changeHover1}
                >
                  Hire Me
                </button>
                <button
                  className={styles.titleSec4But}
                  style={{
                    backgroundColor: isHovering2 ? "#FFA588" : "#202124",
                    color: isHovering2 ? "#202124" : "#FFA588",
                  }}
                  onMouseOver={changeHover2}
                  onMouseLeave={changeHover2}
                >
                  Know More!
                </button>
              </div>
            </div>
            <div className={styles.mainTitleImg}>
              <img src={Hacker} alt="hacker" />
            </div>
          </div>
        </div>
        <div className={styles.aboutMeSectionWrapper}>
          <div className={styles.aboutMeSection}>
            <div className={styles.aboutMeImg}>
              <img src={aboutMeImg} alt="" />
            </div>
            <div className={styles.aboutMeText}>
              <div className={styles.aboutMeTitle}>ABOUT ME</div>
              <div className={styles.aboutMeText1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </div>
              <div className={styles.aboutMeText2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={styles.aboutMeText3}>
                <div className={styles.aboutMeText3Text}>Follow My work on</div>
                <div className={styles.aboutMeText3SocialMedia}>
                  
                  <i class="fa-brands fa-behance"></i>
                  <i class="fa-brands fa-dribbble"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
