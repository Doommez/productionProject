import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { MainPage } from 'pages/MainPage';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator({ width: '400px' })]
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
