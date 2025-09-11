import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [ThemeDecorator(Theme.DARK)]
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

let isOpen = true;

const closeModal = () => {
    isOpen = false;
};

export const Ligth: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {
        isOpen,
        onClose: closeModal,
        children: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`
    }
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isOpen,
        onClose: closeModal,
        children: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Architecto autem consequuntur cum dolorem eaque
                eligendi esse est ex harum illum, inventore laboriosam laudantium magni, numquam
                officiis quis quos, sunt ullam?`
    }
};
