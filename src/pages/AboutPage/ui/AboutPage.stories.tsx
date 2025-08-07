import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { AboutPage } from 'pages/AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    decorators: [ThemeDecorator(Theme.LIGHT)]
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
