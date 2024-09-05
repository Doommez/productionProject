import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";

interface EditorPageProps {
  className?: string;
}

export const EditorPage: FC<EditorPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.EditorPage, {}, [className])}>
    </div>
  );
};