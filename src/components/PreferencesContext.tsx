import * as React from "react";

export type PreferencesContextType = {
  layout: "list" | "grid";
  setLayout: (layout: "list" | "grid") => void;
};
export const PreferencesContext =
  React.createContext<PreferencesContextType>(null);

type ProviderProps = {
  children: React.ReactNode;
};
export const PreferencesProvider: React.FC = ({ children }: ProviderProps) => {
  const [layout, setLayout] = React.useState<"list" | "grid">("list");

  const stateValues = {
    layout,
    setLayout,
  };

  return (
    <PreferencesContext.Provider value={stateValues}>
      {children}
    </PreferencesContext.Provider>
  );
};
