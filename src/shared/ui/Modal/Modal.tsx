import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
                                          className,
                                          children,
                                          isOpen,
                                          onClose
                                      }) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
