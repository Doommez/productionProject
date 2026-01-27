import {
    ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value?: string) => void;
    autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement|null>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        if (!(caretPosition < event.target.value.length - 1)) {
            setCaretPosition(event.target.value.length);
        }
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
       if (autoFocus && ref.current) {
           onFocus();
           ref.current.focus();
       }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [])}>
            <div className={cls.placeholder}>
                {placeholder ? `${placeholder}>` : null}
            </div>
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.Input}
                    type={type}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused
                    && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
