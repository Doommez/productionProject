import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={() => {
                    setIsOpen(((prev) => !prev));
                }}
                >
asdfasdf
                </button>
                <Modal isOpen={isOpen} />
                <div className="content-page">
                    <SideBar />

                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
