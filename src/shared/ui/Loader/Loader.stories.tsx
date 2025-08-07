import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Loader } from 'shared/ui/Loader/Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)]
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LIGHT: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
