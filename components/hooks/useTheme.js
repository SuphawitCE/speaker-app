import { useState } from "react";

const useTheme = (startingTheme = "light") => {
  const [themeState, setThemeState] = useState({
    theme: startingTheme,
  });
  const { theme } = themeState;

  // const validateTheme = (themeValue) => {
  //   if (themeValue === "dark") {
  //     setThemeState((prevState) => ({
  //       ...prevState,
  //       theme: "dark",
  //     }));
  //   } else {
  //     setThemeState((prevState) => ({
  //       ...prevState,
  //       theme: "light",
  //     }));
  //   }
  // };

  return {
    theme,
    setThemeState,
    // : validateTheme,
  };
};

export default useTheme;
