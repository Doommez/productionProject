import 'app/styles/index.scss';
import { ReactNode } from 'react';
import { Theme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: () => ReactNode) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
