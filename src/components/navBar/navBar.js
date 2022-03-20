import React, { useState } from "react";
import { SideBarData } from "../../data/sidebar-data";
import classNames from "classnames";
import UserImage from "../../assets/userImage.png"

import styles from "./style.module.scss";
import "animate.css"

const SideBar = () => {
  const [activeSideBar, setActiveSideBar] = useState(false);
  const openSideBar = () => setActiveSideBar(!activeSideBar);

  return (
    <>
      <div
        className={classNames(styles.backgroundOpacity, {
          [styles.backgroundOpacityVisible]: activeSideBar,
        })}
       
      >
        <div
          className={classNames(styles.sideBar, "animate__animated animate__fadeInLeft", {
            [styles.activeSideBar]: activeSideBar
          })}
          onClick={openSideBar}
        >
          <div className={styles.userInfo}><img src={UserImage}/> <span className={styles.userName}> Daniel</span></div>
          <div>
            {SideBarData.map((item, index) => {
              return (
                <div className={styles.sidebarInfo} key={index}>
                  <li className={styles.listItems}>
                    <div className={styles.iconHolder}>
                      <img
                        src={item.icon}
                        className={classNames(styles.icon, {
                          [styles.activeIcon]: activeSideBar,
                        })}
                        onClick={openSideBar}
                      />
                    </div>
                    <a
                      className={classNames(styles.title, {
                        [styles.active]: activeSideBar,
                      })}
                    >
                      {item.title}
                    </a>
                  </li>
                </div>
              );
            })}
          </div>
          <div className={styles.bottomInfo}>
            <a>Languge</a>
            <a>Get Help</a>
            <a>Exit</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
