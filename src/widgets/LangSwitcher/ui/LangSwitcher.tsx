import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  console.log(i18n);

  return (
    <Button
      themeButton={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={() => i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")}
    >
      {t("Язык ")}
    </Button>
  );
};
