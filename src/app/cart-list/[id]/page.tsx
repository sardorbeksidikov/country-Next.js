import { THEME_MODE } from "@/Enums";
import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
  useRef,
} from "react";

interface IThemeValue {
  mode: THEME_MODE;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeValue>({
  mode: THEME_MODE.LIGHT_MODE,
  toggleTheme: () => {},
});

const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeContextState, setThemeContextState] = useState({
    mode: THEME_MODE.LIGHT_MODE,
  });

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme");
    const userPreferDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    if (defaultTheme) {
      setThemeContextState({ mode: defaultTheme as THEME_MODE });
      return;
    } else if (userPreferDarkTheme.matches) {
      setThemeContextState({ mode: THEME_MODE.DARK_MODE });
    } else {
      setThemeContextState({ mode: THEME_MODE.LIGHT_MODE });
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove(THEME_MODE.DARK_MODE, THEME_MODE.LIGHT_MODE);
    document.body.classList.add(themeContextState.mode);
  }, [themeContextState]);

  function toggleTheme() {
    setThemeContextState((prevTheme) => {
      return {
        ...prevTheme,
        mode:
          prevTheme.mode === THEME_MODE.DARK_MODE
            ? THEME_MODE.LIGHT_MODE
            : THEME_MODE.DARK_MODE,
      };
    });
    localStorage.setItem("theme", themeContextState.mode);
  }

  return (
    <ThemeContext.Provider value={{ ...themeContextState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
