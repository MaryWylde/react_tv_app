import React, { useState, useEffect } from "react";
import SideBar from "../../components/navBar/navBar";
import MovieInformation from "../../components/movideInformation/movieInformation";
import { useSessionStorage } from "../../useSessionStorage";

import MovieSlider from "../../components/slider/slider";
import styles from "./styles.module.scss";

const HomePage = ({ data, selectId }) => {
  const [videoData, setVideoData] = useState({});
  const [idIsClicked, setIdIsClicked] = useSessionStorage("id", false);

  const selectedVideo = videoData?.TrendingNow?.find(
    ({ Id }) => Id === idIsClicked
  );

  useEffect(() => {
    setVideoData(data);
  }, [data]);

  return (
    <div className={styles.homePage}>
      <SideBar />
      {idIsClicked ? (
        <MovieInformation
          data={data}
          videoData={videoData}
          Category={selectedVideo?.Category}
          CoverImage={selectedVideo?.CoverImage}
          TitleImage={selectedVideo?.TitleImage}
          ReleaseYear={selectedVideo?.ReleaseYear}
          MpaRating={selectedVideo?.MpaRating}
          Duration={selectedVideo?.Duration}
        />
      ) : (
        <MovieInformation
          data={data}
          videoData={videoData}
          Category={videoData.Featured?.Category}
          CoverImage={videoData.Featured?.CoverImage}
          TitleImage={videoData.Featured?.TitleImage}
          ReleaseYear={videoData.Featured?.ReleaseYear}
          MpaRating={videoData.Featured?.MpaRating}
          Duration={videoData.Featured?.Duration}
        />
      )}

      <MovieSlider
        data={data}
        videoData={videoData}
        movieArray={videoData?.TrendingNow}
        idIsClicked={setIdIsClicked}
        getId={idIsClicked}
      />
    </div>
  );
};

export default HomePage;
