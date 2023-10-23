import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};
