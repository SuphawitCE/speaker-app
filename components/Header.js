import React, { useContext } from "react";
import { ThemeContext } from "./App";

const Header = (/*{ theme } */) => {
  const { theme } = useContext(ThemeContext);

  const textsColor = theme === "light" ? "" : "text-info";
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
          </div>
          <div className={textsColor}>
            <h4 className="header-tittle">Bangkok Code Camp</h4>
          </div>
          <div className={textsColor}>
            Hello Mr. Chicken &nbsp;&nbsp;
            <span>
              <a href="#"> sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
