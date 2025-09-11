import 'app/styles/index.scss';
import { ReactNode } from 'react';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: () => ReactNode) => (

    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>

);
