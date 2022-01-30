import { useState } from "react";

const useTheme = (startingTheme = "light") => {
  // const [themeState, setThemeState] = useState({
  //   theme: startingTheme,
  // });
  // const { theme } = themeState;

  const [theme, setTheme] = useState(startingTheme);

  const validateTheme = (themeValue) => {
    if (themeValue === "dark") {
      setTheme("dark");

      // setThemeState((prevState) => ({
      //   ...prevState,
      //   theme: "dark",
      // }));
    } else {
      setTheme("light");

      // setThemeState((prevState) => ({
      //   ...prevState,
      //   theme: "light",
      // }));
    }
  };

  return {
    theme,
    setTheme: validateTheme,
    // setThemeState: validateTheme,
  };
};

export default useTheme;
