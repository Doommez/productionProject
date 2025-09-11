import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (

        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />

                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
