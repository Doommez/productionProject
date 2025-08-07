import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { MainPage } from 'pages/MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    decorators: [ThemeDecorator(Theme.LIGHT)]
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
