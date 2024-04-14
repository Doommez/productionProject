import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense, useContext, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter></AppRouter>
      <ThemeSwitcher />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>{" "}
      </Suspense> */}
    </div>
  );
};

export default App;
