import React from "react";
import PlayIcon from "../../../assets/play.svg";

import styles from "./style.module.scss";

const PlayBtn = () => {
  return (
    <button className={styles.playBtn}>
      <img src={PlayIcon} /> Play
    </button>
  );
};

export default PlayBtn;
