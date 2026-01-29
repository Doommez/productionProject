import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

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
        onClick: { action: 'clicked' },
        size: {
            control: 'select',
            options: Object.values(ButtonSize)
        },
        square: {
            control: 'select',
            options: [true, false]
        }

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

export const ClearInverted: Story = {
    args: {
        children: 'кнопка',
        themeButton: ThemeButton.CLEAR_INVERTED
    }
};

export const Clicked: Story = {
    args: {
        children: 'кнопка'

    }
};
export const Outline: Story = {
    args: {
        children: 'кнопка',
        themeButton: ThemeButton.OUTLINE
    }
};

export const Size: Story = {
    args: {
        children: 'кнопка',
        size: ButtonSize.XL
    }
};

export const Disabled: Story = {
    args: {
        children: 'кнопка',
        size: ButtonSize.XL,
        disabled: true
    }
};
