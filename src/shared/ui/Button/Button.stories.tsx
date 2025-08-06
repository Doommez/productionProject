import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        themeButton: {
            control: 'select',
            options: Object.values(ThemeButton)

        },
        children: {
            control: 'text'
        },
        onClick: { action: 'clicked' }
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'кнопка'
    }
};

export const Clear: Story = {
    args: {
        children: 'кнопка',
        themeButton: ThemeButton.CLEAR
    }
};
export const Clicked: Story = {
    args: {
        children: 'кнопка',
        onClick: () => {
            console.log('asdf');
        }
    }
};
export const Outline: Story = {
    args: {
        children: 'кнопка',
        themeButton: ThemeButton.OUTLINE,
        onClick: () => {
            console.log('asdf');
        }
    }
};
