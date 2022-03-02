import * as React from "react";

type ThemeType = "light" | "dark";
export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  backgroundColor: string;
  color: string;
  backgroundColorHighlight: string;
  tintColor: string;
};
export const ThemeContext = React.createContext<ThemeContextType>(null);

const Colors = {
  light: {
    backgroundColor: "#f6f6f6",
    backgroundColorHighlight: "white",
    color: "#141926",
    tintColor: "#0f6375",
  },
  dark: {
    backgroundColor: "#141926",
    backgroundColorHighlight: "#272c3a",
    color: "#f6f6f6",
    tintColor: "white",
  },
};

type ProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider: React.FC = ({ children }: ProviderProps) => {
  const [theme, setTheme] = React.useState<ThemeType>("light");

  const backgroundColor = Colors[theme].backgroundColor;
  const color = Colors[theme].color;
  const backgroundColorHighlight = Colors[theme].backgroundColorHighlight;
  const tintColor = Colors[theme].tintColor;

  const stateValues = {
    theme,
    setTheme,
    backgroundColor,
    color,
    backgroundColorHighlight,
    tintColor,
  };

  return (
    <ThemeContext.Provider value={stateValues}>
      {children}
    </ThemeContext.Provider>
  );
};
