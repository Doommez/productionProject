import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [ThemeDecorator(Theme.DARK)]
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        title: 'Title',
        text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`
    }
};
export const Error: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        title: 'Title',
        text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`,
        theme: TextTheme.ERROR
    }
};
export const DefaultDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Title',
        text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`
    }
};

export const OnlyTitle: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        title: 'Title'
    }
};

export const OnlyText: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`
    }
};
