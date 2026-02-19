import {
    FC, memo, useCallback
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/reduxHooks';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import I18n from 'shared/config/i18n/i18n';
import { getLoginUsername } from 'features/authByUserName/model/selectors/getUsername/getUsername';
import {
    getLoginPassword
} from 'features/authByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from 'features/authByUserName/model/selectors/getLoginError/getLoginError';
import {
    getLoginLoading
} from 'features/authByUserName/model/selectors/getLoginLoading/getLoginLoading';
import {
    DynamicModuleLoader,
    ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer
};

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);

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
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {
                    error && <Text text={I18n.t('Неверный вход')} theme={TextTheme.ERROR} />
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
