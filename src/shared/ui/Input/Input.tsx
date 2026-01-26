import {
 ChangeEvent, FC, InputHTMLAttributes, memo
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value?: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [])}>
            <input type={type} value={value} onChange={onChangeHandler} {...otherProps} />
        </div>
    );
});
