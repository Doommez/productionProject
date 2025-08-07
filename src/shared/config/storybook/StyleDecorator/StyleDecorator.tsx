import 'app/styles/index.scss';

import { ReactNode } from 'react';

export const StyleDecorator = (Story: () => ReactNode) => (
    <div style={{ width: '800px' }}>
        <Story />
    </div>
);
