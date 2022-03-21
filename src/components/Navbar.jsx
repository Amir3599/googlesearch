import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {

  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="flex items-center gap-3 text-2xl font-bold text-white py-1 px-2 bg-blue-500 rounded-lg dark:text-gray-900 hover:shadow-xl duration-1000 ">
            Gooogglle{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </Link>
        <button type="button" onClick={()=>setDarkTheme(!darkTheme)}
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full hover:shadow-lg"
        >
          {darkTheme ? "🌚" : "☀"}
        </button>
      </div>
      <Search />
    </div>
  );
};
