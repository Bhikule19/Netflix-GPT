import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="lg:py-5 md:py-4 sm:py-3 py-2.5">
      {/* <h1 className="text-3xl py-4 text-white">{title}</h1> */}
      <span className="lg:text-2xl md:text-xl sm:text-base text-base text-white font-semibold md:pl-3 pl-2 lg:pl-4">
        {title}
      </span>
      <div className="flex overflow-x-auto no-scrollbar  lg:pt-5 md:pt-4 sm:pt-2.5 pt-2.5">
        <div className="flex lg:gap-4 md:gap-3 gap-2 sm:gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
