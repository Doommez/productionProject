import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            <Input
                autoFocus
                placeholder={t('Введите username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={loginForm.username}
            />

            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={loginForm.password}
            />

            <Button className={cls.loginBtn} themeButton={ThemeButton.OUTLINE!}>
                {
                    t('Войти')
                }
            </Button>

        </div>
    );
});
