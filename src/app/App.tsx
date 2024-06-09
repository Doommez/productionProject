import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/themeProvider";
import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";
const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter></AppRouter>
      </div>

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
