import React, { useState } from "react";

const SpeakersToolbar = () => {
  const [local, setLocal] = useState({
    showSessions: true,
    theme: "light",
  });

  const { showSessions, theme } = local;

  const handleSessionChange = (e) => {
    setLocal((prevState) => ({
      ...prevState,
      showSessions: e.target.checked,
    }));
  };

  const handleThemeChange = (e) => {
    setLocal((prevState) => ({
      ...prevState,
      theme: e.target.value,
    }));
  };

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={handleSessionChange}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={handleThemeChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeakersToolbar;
