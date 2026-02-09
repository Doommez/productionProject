import 'app/styles/index.scss';

import { CSSProperties, ReactNode } from 'react';
import css from './StyleDecorator.module.scss';

export const StyleDecorator = (style?: CSSProperties) => (Story: () => ReactNode) => (
    <div style={style} className={css.StyleDecorator}>
        <Story />
    </div>
);
