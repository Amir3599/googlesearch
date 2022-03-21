import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Results } from "./Results";

export const Routess = () => {
  const routesWithSameElement = ["/images", "/videos", "/search", "/news"];
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        {routesWithSameElement.map((r) => {
          return <Route path={r} element={<Results />} />;
        })}

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};
