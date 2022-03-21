import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "ALL 🔍" },
  { url: "/images", text: "IMAGES 🖼️" },
  { url: "/news", text: "NEWS 📰" },
  { url: "/videos", text: "VIDEOS 🎥" },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className={(navData) => navData.isActive ?"text-blue-700 border-b2 dark:text-blue-300 border-b-4 border-blue-300 mb-0 mx-5"
           : "mx-5 hover:shadow-xl duration-700"}
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
