import React, { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
