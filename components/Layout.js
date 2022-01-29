import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

// export const ThemeContext = createContext();

const Layout = ({ startingTheme, children }) => {
  // const [parentState, setParentState] = useState({
  //   showSessions: true,
  //   theme: startingTheme,
  // });
  // const { showSessions, theme } = parentState;

  // const providerSharedState = { showSessions, theme, setParentState };

  // const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
};

const LayoutNoThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
