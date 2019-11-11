import React, { FunctionComponent } from 'react';
import THEME from './THEME';
const ThemeContext = React.createContext(THEME);

export type Theme = typeof THEME & { [key: string]: any };
export type PartialTheme = Partial<Theme>;
export interface IThemeProvider {
  value: PartialTheme;
  title?: string;
}

const ThemeProvider: FunctionComponent<IThemeProvider> = ({
  value,
  children
}) => {
  const theme = { ...THEME, ...value };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
