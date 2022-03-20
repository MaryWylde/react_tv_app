import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

const MovieSlider = ({ videoData, movieArray, idIsClicked, getId }) => {
  const firstItem = getId;
  videoData?.TrendingNow?.sort((first, second) => {
    return first?.Id === firstItem ? -1 : second?.Id === firstItem ? 1 : 0;
  });

  return (
    <>
      {!!videoData?.TrendingNow?.length && (
        <div>
          <div
            className={classNames(
              styles.rowItems,
              "animate__animated  animate__fadeInUp"
            )}
          >
            <span className={styles.trending}> Trending Now</span>
            {movieArray?.map((elem, index) => (
              <div className={styles.trendingMovies} key={index}>
                <img
                  src={elem?.CoverImage}
                  className={styles.coverImage}
                  onClick={() => {
                    idIsClicked(elem?.Id, true);
                  }}
                  id={elem?.Id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieSlider;
