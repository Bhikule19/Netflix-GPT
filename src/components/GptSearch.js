import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="flex justify-center relative  items-center flex-col h-full xl:pt-40  lg:pt-40 md:pt-28 sm:pt-24 pt-20 w-screen overflow-hidden ">
      <div className="z-30 w-full h-20">
        <GptSearchBar />
      </div>
      <div className="w-11/12">
        <GptMovieSuggestions />
      </div>

      <div className="overflow-hidden fixed -z-10 top-0 left-0 w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110 object-cover md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full"
        />
      </div>
    </div>
  );
};

export default GptSearch;
