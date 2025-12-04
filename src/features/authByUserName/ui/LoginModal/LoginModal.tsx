import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/authByUserName/ui/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = ({ className }) => (
        <Modal>
           <LoginForm />
        </Modal>
  );
