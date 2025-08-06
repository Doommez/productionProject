import 'app/styles/index.scss';

import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: () => ReactNode) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
