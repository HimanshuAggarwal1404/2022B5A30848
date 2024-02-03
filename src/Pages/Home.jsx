import React, { useState } from "react";
import styles from "../Styles/Home.module.scss";
import Header from "../Components/Header";
import aboutMeImg from "../assets/aboutme.svg";
import Hacker from "../assets/Hacker-bro 1.svg";
import ServicesCard from "../Components/ServicesCard";
import Brush from "../assets/paintbrush.svg";
import thinkperson from "../assets/thinkingperson.png";
import insta from "../assets/insta.svg";
import chrome from "../assets/chrome.svg";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import CarouselCard from "../Components/CarouselCard";
import projectkm from "../assets/projectkm.png";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/right arrow.svg";
const Home = () => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isGDActive, setIsGDActive] = useState(false);
  const [isUIActive, setIsUIActive] = useState(false);
  const [isSMActive, setIsSMActive] = useState(false);
  const [isGDActived, setIsGDActived] = useState(true);
  const [isUIActived, setIsUIActived] = useState(false);
  const [isSMActived, setIsSMActived] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const moveRight = () => {
    setCarouselPosition((prevPosition) =>
      prevPosition === -120 ? 0 : prevPosition - 60
    );
  };
  const moveLeft = () => {
    setCarouselPosition((prevPosition) =>
      prevPosition === 0 ? -120 : prevPosition + 60
    );
  };
  const setGDActivated = () => {
    setIsGDActived(true);
    setIsUIActived(false);
    setIsSMActived(false);
  };
  const setUIActivated = () => {
    setIsGDActived(false);
    setIsUIActived(true);
    setIsSMActived(false);
  };
  const setSMActivated = () => {
    setIsGDActived(false);
    setIsUIActived(false);
    setIsSMActived(true);
  };
  const changeGD = () => {
    setIsGDActive(!isGDActive);
  };
  const changeUI = () => {
    setIsUIActive(!isUIActive);
  };
  const changeSM = () => {
    setIsSMActive(!isSMActive);
  };
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
        <motion.div
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.section1}
        >
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
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, staggerChildren: 0.5 }}
          className={styles.aboutMeSectionWrapper}
        >
          <div className={styles.aboutMeSection}>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.aboutMeImg}
            >
              <img src={aboutMeImg} alt="" />
            </motion.div>
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
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={styles.servicesSection}
        >
          <div className={styles.ServicesTitle}>
            <div className={styles.ServicesTitleText}>SERVICES I OFFER</div>
            <div className={styles.ServicesTitleUnderline}></div>
          </div>
          <div className={styles.ServicesCarouselWrapper}>
            <div className={styles.ServicesCarousel}>
              <div className={styles.serviceCardOuter}>
                <ServicesCard
                  img={Brush}
                  title="Graphic Designing"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div
                className={styles.serviceCardOuter}
                style={{ transform: "scale(1.1" }}
              >
                <ServicesCard
                  img={chrome}
                  title="Web Development"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>

              <div className={styles.serviceCardOuter}>
                <ServicesCard
                  img={insta}
                  title="Social Media Marketing"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.projectSection}
          initial={{ x: 1000 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.projectSectionTitle}>
            <div className={styles.projectSectionTitleText}>MY PROJECTS</div>
            <div className={styles.projectSectionTitleUnderline}></div>
          </div>
          <div className={styles.projectSectionHeaders}>
            <div
              className={styles.projectSectionHeader}
              onMouseEnter={changeGD}
              onMouseLeave={changeGD}
              onClick={setGDActivated}
            >
              <div
                className={styles.headerTitle}
                style={{
                  color: isGDActived ? "white" : "rgba(255, 255, 255, 0.442)",
                }}
              >
                Graphic Designing
              </div>
              <div
                className={styles.headerUnderline}
                style={{
                  width: isGDActive || isGDActived ? "100%" : "0%",
                  backgroundColor: isGDActived ? "#FFA588" : "white",
                }}
              ></div>
            </div>
            <div
              className={styles.projectSectionHeader}
              onMouseEnter={changeUI}
              onMouseLeave={changeUI}
              onClick={setUIActivated}
            >
              <div
                className={styles.headerTitle}
                style={{
                  color: isUIActived ? "white" : "rgba(255, 255, 255, 0.442)",
                }}
              >
                UI-UX
              </div>
              <div
                className={styles.headerUnderline}
                style={{
                  width: isUIActive || isUIActived ? "60%" : "0%",
                  backgroundColor: isUIActived ? "#FFA588" : "white",
                }}
              ></div>
            </div>
            <div
              className={styles.projectSectionHeader}
              onMouseEnter={changeSM}
              onMouseLeave={changeSM}
              onClick={setSMActivated}
            >
              <div
                className={styles.headerTitle}
                style={{
                  color: isSMActived ? "white" : "rgba(255, 255, 255, 0.442)",
                }}
              >
                Social Media
              </div>
              <div
                className={styles.headerUnderline}
                style={{
                  width: isSMActive || isSMActived ? "90%" : "0%",
                  backgroundColor: isSMActived ? "#FFA588" : "white",
                }}
              ></div>
            </div>
          </div>
          <div className={styles.projectSectionContents}>
            <div
              className={styles.projectSectionContent}
              style={{ display: isGDActived ? "grid" : "none" }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project1} alt="" />
                <div className={styles.projectSectionCollageImgOverlay}></div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project2} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project3} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={projectkm} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project3} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project1} alt="" />
              </motion.div>
            </div>
            <div
              className={styles.projectSectionContent}
              style={{ display: isUIActived ? "grid" : "none" }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project3} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project1} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project2} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={projectkm} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project2} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project3} alt="" />
              </motion.div>
            </div>
            <div
              className={styles.projectSectionContent}
              style={{ display: isSMActived ? "grid" : "none" }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project2} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project3} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project1} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={projectkm} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project1} alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.projectSectionCollageImg}
              >
                <img src={project2} alt="" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.clientsSection}
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.clientsTitle}>
            <div className={styles.clientsTitleText}>WHAT MY CLIENTS SAY..</div>
            <div className={styles.clientsTitleUnderline}></div>
          </div>
          <div className={styles.clientsContent}>
            <div className={styles.arrows}>
              <img src={leftarrow} alt="" onClick={moveLeft} />
            </div>
            <div className={styles.clientsCarouselWrapper}>
              <div
                className={styles.clientsCarousel}
                style={{ transform: `translateX(${carouselPosition}vw)` }}
              >
                <CarouselCard
                  img={thinkperson}
                  content="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam."
                  name="Person A"
                />
                <CarouselCard
                  img={aboutMeImg}
                  content="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam."
                  name="Person B"
                />
                <CarouselCard
                  img={Hacker}
                  content="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam."
                  name="Person C"
                />
              </div>
            </div>
            <div className={styles.arrows}>
              {" "}
              <img src={rightarrow} alt="" onClick={moveRight} />
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
