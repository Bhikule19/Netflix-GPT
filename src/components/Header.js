import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import AIlogo from "../images/AIlogo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when components unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b from-black absolute w-full z-50 flex justify-between overflow-hidden items-center lg:px-10 md:px-10 sm:px-8 px-4">
      <Link to={"/browse"}>
        <img
          className="lg:w-48 sm:w-28 w-20 md:w-40   md:py-6 py-4 lg:py-6"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>

      <div className="flex flex-row justify-center items-center">
        {user && (
          <div className="flex justify-center items-center flex-row lg:gap-2 gap-0.5 sm:gap-1">
            {showGptSearch && (
              <select
                className="bg-gray-300 text-black border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 lg:px-2 lg:py-1 md:px-2 md:py-1 rounded-md "
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="text-black lg:px-2 lg:py-1 md:px-2 :px-1 :py-0.5 sm:px-1.5 sm:py-0.5 md:py-1"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="bg-black text-base  font-semibold ml-2 py-2 pl-2 pr-4 rounded-3xl  flex items-center justify-center text-white border-white border-2 hover:hoverAi"
              onClick={handleGptSearchClick}
            >
              <img src={AIlogo} alt="user icon" className="w-6 h-6" />
              {showGptSearch ? "Homepage" : "AI Recomendation"}
            </button>
            <button
              onClick={handleSignOut}
              className="ml-4 text-xl font-semibold text-black py-1 px-2 rounded-md bg-white"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
