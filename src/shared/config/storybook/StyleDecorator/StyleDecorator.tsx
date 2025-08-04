import { ThemeProvider, useTheme } from 'app/providers/themeProvider';
import '../../../../app/styles/index.scss';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';

export const StyleDecorator = (Story: () => ReactNode) => (
        <Story />
        // <>
        //     {/* /!* eslint-disable-next-line i18next/no-literal-string *!/ */}
        //     {/* <Button onClick={toggleTheme}> */}
        //     {/*     switch theme */}
        //     {/* </Button> */}
        //     {/* <ThemeProvider> */}
        //     {/*     <div className={classNames('app', {}, [theme])}> */}
        //     {/*         <Story /> */}
        //     {/*     </div> */}
        //     {/* </ThemeProvider> */}
        // </>

    );
