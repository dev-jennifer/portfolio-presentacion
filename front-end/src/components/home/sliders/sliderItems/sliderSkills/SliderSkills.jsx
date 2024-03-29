import React from "react";
import { Animator, MoveOut } from "react-scroll-motion";
import styles from "./slider.module.css";
function SliderSkills() {
  return (
    <div
      style={{
        zIndex: "1",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.containerDivisor}>
        <div className="row centrado">
          <div className="fifty fadein" id="image">
            <Animator animation={MoveOut(-300, 0)}>
              <div>
                <img
                  className="effectUp circle"
                  src="/images/02.webp"
                  alt="fullStack"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </Animator>
          </div>

          <div className="fifty fadein" id="name">
            <Animator animation={MoveOut(10, 0)}>
              <p className={styles.mission}>
                Hi, I'm Jennfer Sanchez. I focused on creating a digital product
                that create{" "}
                <span className={styles.span}>
                  the solution that you're searching
                </span>
                .
              </p>

              <div id="techList" className={styles.techList}>
                <h6 className={styles.skills}>SKILLS</h6>

                <div>
                  <h6 className={styles.react}>react</h6>
                  <h6 className={styles.javascript}>javascript</h6>
                  <h6 className={styles.html5}>html5</h6>
                  <h6 className={styles.wordpress}>wordpress</h6>
                  <h6 className={styles.css}>css</h6>
                  <h6 className={styles.express}>express</h6>
                  <h6 className={styles.node}>node</h6>
                  <h6 className={styles.mongodb}>mongodb</h6>
                  <h6 className={styles.python}>python</h6>
                </div>
              </div>
            </Animator>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSkills;
