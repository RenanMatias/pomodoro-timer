import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); // Don't follow the link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    // document.documentElement.setAttribute("data-theme", theme);
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependências", Date.now());
  // }); // Execute all the time when the component renders on the screen

  // useEffect(() => {
  //   console.log("useEffect com array de dependências vazio", Date.now());
  // }, []); // Execute only when React mounts the component on the screen the first time

  useEffect(() => {
    console.log("A variável theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log("Cleanup: A variável theme vai mudar");
    };
  }, [theme]); // Execute only when the variable "theme" changes

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href="#" aria-label="Histórico" title="Histórico">
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href="#" aria-label="Configurações" title="Configurações">
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href="#" aria-label="Mudar tema" title="Mudar tema" onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </nav>
  );
}
