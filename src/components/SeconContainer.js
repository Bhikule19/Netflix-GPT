import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="lg:px-12 md:px-8 sm:px-6 px-4 lg:-mt-60 xl:-mt-64 md:-mt-2  sm:mt-4  relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />{" "}
        </div>
      </div>
    )
  );
};

export default SeconContainer;
