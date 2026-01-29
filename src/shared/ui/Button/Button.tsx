import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CLEAR_INVERTED = 'clearInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    themeButton?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        themeButton,
        children,
        square,
        size,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[themeButton]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
