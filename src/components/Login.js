import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    //Valid form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleToddleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
          className="brightness-[.6] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110  md:h-[600px] sm:h-[600px] object-cover h-screen lg:h-[700px]  w-full"
        />
      </div>

      <div className="bg-black bg-opacity-75 rounded-md  lg:w-4/12 w-11/12 sm:w-7/12 md:w-5/12 absolute mx-auto lg:my-28 my-44 md:my-24 right-0 left-0 z-20 py-4 md:py-6 lg:py-6">
        <form className="flex justify-center items-center flex-col lg:py-8 lg:px-8 py-4 px-2 md:py-8 md:px-8">
          <div className="w-10/12">
            <h1 className="text-white lg:text-4xl text-3xl md:text-4xl font-bold md:my-4 my-3 lg:my-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {isSignIn ? null : (
              <input
                type="text"
                placeholder="Full Name"
                className="lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full"
              ref={password}
            />
            <button
              className="w-full bg-red-700 py-2 text-white rounded-md my-3 font-semibold"
              onClick={handleValidation}
              type="button"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-red-500 font-semibold">{errorMessage}</p>
            <p>
              {isSignIn ? "New to Netflix? " : "Already Registered? "}
              <button
                type="button"
                className=" hover:underline font-semibold"
                onClick={handleToddleSignIn}
              >
                {isSignIn ? "Sign up now." : "Sign up now"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
