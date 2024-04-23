export const API_CALL = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    accept: "application/json",
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
