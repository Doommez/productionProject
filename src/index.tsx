import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './app/providers/themeProvider';

import './shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
