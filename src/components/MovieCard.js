import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="xl:w-[170px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[90px] cursor-pointer hover:opacity-90 hover:scale-105">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full stroke animate  rounded-lg"
      />
    </div>
  );
};
export default MovieCard;
