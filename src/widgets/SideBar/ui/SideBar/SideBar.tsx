import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./SideBar.module.scss";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggle}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* language swicht */}
      </div>
    </div>
  );
};
