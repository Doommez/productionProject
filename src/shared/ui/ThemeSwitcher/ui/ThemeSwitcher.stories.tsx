import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)]
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LIGHT: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
};
