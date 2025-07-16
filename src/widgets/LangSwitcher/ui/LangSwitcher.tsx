import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const {
        t,
        i18n
    } = useTranslation();
    console.log(i18n);

    const toggle = () => i18n.changeLanguage(i18n.language === 'ru'
        ? 'en' : 'ru');

    return (
        <Button
            themeButton={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
