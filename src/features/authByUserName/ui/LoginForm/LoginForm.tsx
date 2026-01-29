import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/reduxHooks';
import {
    loginByUserName
} from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username,
        password,
        error,
        isLoading
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUserName({
            username,
            password
        }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {
                error && <div>{error}</div>
            }
            <Input
                autoFocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />

            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />

            <Button
                className={cls.loginBtn}
                themeButton={ThemeButton.OUTLINE!}
                disabled={isLoading}
                onClick={onLogin}
            >
                {
                    t('Войти')
                }
            </Button>

        </div>
    );
});
