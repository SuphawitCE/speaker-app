import React, { useContext } from "react";
import { SpeakerFilterContext } from "./contexts/SpeakerFilterContext";
import { ThemeContext } from "./contexts/ThemeContext";

const SpeakersToolbar = () => {
  const { showSessions, eventYear, EVENT_YEAR, setSpeakerState, searchQuery } =
    useContext(SpeakerFilterContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleSessionChange = (e) => {
    setSpeakerState((prevState) => ({
      ...prevState,
      showSessions: e.target.checked,
    }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSpeakerState((prevState) => ({
      ...prevState,
      searchQuery: e.target.value,
    }));
  };

  const handleEventYearChange = ({ currentTarget }) => {
    setSpeakerState((prevState) => ({
      ...prevState,
      eventYear: currentTarget.value,
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
            <li>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={handleSearchQueryChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Year</strong>
              <label className="dropmenu">
                <select
                  className="form-control"
                  value={eventYear}
                  onChange={handleEventYearChange}
                >
                  {EVENT_YEAR.map((year) => {
                    return (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    );
                  })}
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
