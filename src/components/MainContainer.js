import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <VideoBg movieId={id} />
      </div>
      <div className="absolute top-0">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>

    // <div className="relative ">
    // <div className="overflow-hidden">
    //   <VideoBackground movieid={id} />
    // </div>
    // <div className="absolute top-0 ">
    //   <VideoTitle original_title={original_title} overview={overview} />
    // </div>
    // </div>
  );
};

export default MainContainer;
