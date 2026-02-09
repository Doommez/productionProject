import type { Meta, StoryObj } from '@storybook/react-webpack5';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LoginForm } from 'features/authByUserName/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import i18n from 'shared/config/i18n/i18n';

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],

    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        loginForm: {
            username: 'test',
            password: 'test'
        }
    })]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'tesz',
            password: 'tesz',
            error: i18n.t('Неверный вход')
        }
    })]
};
