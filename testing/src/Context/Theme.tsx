import { createContext, useState, type ReactNode } from "react";

type ThemeType = "Light" | "Dark";

const themeMap: Record<ThemeType, { background: string; text: string }> = {
  Light: { background: "#ffffff", text: "#000000" },
  Dark: { background: "#000000", text: "#ffffff" },
};

interface Theme {
  type: ThemeType;
  colors: {
    background: string;
    text: string;
  };
}

interface Itheme {
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<Itheme>({
  theme: { type: "Light", colors: themeMap.Light },
  toggle: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeType, setThemeType] = useState<ThemeType>("Light");

  const toggle = () => {
    setThemeType((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  const theme: Theme = { type: themeType, colors: themeMap[themeType] };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* const { theme, toggle } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.className = theme.type === "Dark" ? "dark" : "";
  }, [theme]);

  return (
    <>
      <h1>Current Theme: {theme.type}</h1>
      <button onClick={toggle}>Toggle Theme</button>
    </>
  ); */
