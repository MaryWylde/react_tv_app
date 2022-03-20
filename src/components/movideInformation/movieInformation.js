import React from "react";
import MoreInfoBtn from "../buttons/moreInfoButton/moreInfoButton";
import PlayBtn from "../buttons/playButton/playButton";
import classNames from "classnames";

import styles from "./style.module.scss";
import "animate.css";

const MovieInformation = ({
  CoverImage,
  Category,
  TitleImage,
  ReleaseYear,
  Duration,
  MpaRating,
}) => {
  const dummyText = ` Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s.`;

  const secondsToHours = (duration) => {
    duration = Number(duration);
    const hour = Math.floor(duration / 3600);
    const minute = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor((duration % 3600) % 60);

    const showHour = hour > 0 ? hour + (hour == 1 && "h ") : "";
    const showMinutes =
      minute > 0 ? minute + (minute == 1 ? "min, " : " min ") : "";
    const showSeconds =
      seconds > 0 ? seconds + (seconds == 1 ? " second" : " seconds") : "";
    return showHour + showMinutes + showSeconds;
  };

  return (
    <div className={styles.category}>
      <img
        src={CoverImage}
        className={classNames(
          styles.mainImage,
          "animate__animated  animate__fadeInRight"
        )}
      />
      <div className={styles.infroWrapper}>
        <div className={styles.mainInfo}>
          <h4 className={styles.category}>{Category}</h4>

          <img className={styles.title} src={TitleImage} />
        </div>

        <div className={styles.numberedInfo}>
          <span className={styles.released}>{ReleaseYear}</span>
          <span className={styles.rating}>{MpaRating}</span>
          <span className={styles.duration}>{secondsToHours(Duration)}</span>
        </div>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{dummyText}</p>
        </div>

        <div className={styles.btnWrapper}>
          <div className={styles.moreInfo}>
            <MoreInfoBtn />
          </div>
          <div>
            <PlayBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
