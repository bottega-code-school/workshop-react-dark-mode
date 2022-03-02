import * as React from "react";

type ThemeType = "light" | "dark";
export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  backgroundColor: string;
  color: string;
};
export const ThemeContext = React.createContext<ThemeContextType>(null);

const Colors = {
  light: {
    backgroundColor: "#f6f6f6",
    color: "#141926",
  },
  dark: {
    backgroundColor: "#141926",
    color: "#f6f6f6",
  },
};

type ProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider: React.FC = ({ children }: ProviderProps) => {
  const [theme, setTheme] = React.useState<ThemeType>("light");

  const backgroundColor = Colors[theme].backgroundColor;
  const color = Colors[theme].color;

  const stateValues = {
    theme,
    setTheme,
    backgroundColor,
    color,
  };

  return (
    <ThemeContext.Provider value={stateValues}>
      {children}
    </ThemeContext.Provider>
  );
};
