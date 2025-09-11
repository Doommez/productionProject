import React, {
    FC, ReactElement, useMemo, useState
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);

const ThemeProvider: FC<{
    children: ReactElement,
    initialTheme?: Theme
}> = ({
          children,
          initialTheme = Theme.LIGHT
      }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
