 import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import { Suspense, useEffect } from 'react';
 import { useAppDispatch } from 'shared/hooks/reduxHooks';
 import { userActions } from 'entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
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
