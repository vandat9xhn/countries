import * as React from "react";

import icon_moon from "../../../images/icon_moon.png";
import icon_moon_light from "../../../images/icon_moon_light.png";
import "./Header.scss";

//
export interface HeaderProps {}

//
function Header({}: HeaderProps) {
  const [dark_mode, setDarkMode] = React.useState(true);

  //
  React.useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = dark_mode ? "dark" : "light";
  }, [dark_mode]);

  //
  const toggleDarkMode = () => {
    setDarkMode((dark_mode) => !dark_mode);
  };

  //
  return (
    <div className="Header">
      <div className="Header_row flex space-between items-center">
        <div className="Header_title">Where in the world?</div>

        <div
          className="Header_mode flex items-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          <img
            className="Header_mode_img object-fit-cover"
            src={dark_mode ? icon_moon : icon_moon_light}
            alt=""
          />

          <div>{dark_mode ? "Dark" : "Light"} mode</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
