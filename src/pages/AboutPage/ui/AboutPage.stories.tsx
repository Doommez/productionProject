import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { AboutPage } from 'pages/AboutPage';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator({ width: '400px' })]
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
