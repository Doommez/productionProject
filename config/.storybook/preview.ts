import type { Preview } from '@storybook/react-webpack5';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import {
    TranslationDecorator
} from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';
import 'app/styles/index.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [StyleDecorator(), RouterDecorator, TranslationDecorator]
};

export default preview;
