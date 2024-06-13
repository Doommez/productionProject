import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Component = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n);

  return (
    <div>
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
        }
      >
        {t("перевод")}
      </button>
      {t("Тестовый перевод")}
    </div>
  );
};
const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <Component />
          <AppRouter></AppRouter>
        </div>
      </Suspense>

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
