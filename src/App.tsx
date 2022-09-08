import * as React from "react";

import { IS_MOBILE } from "./constant";
import "./styles/main.scss";

import detail_pc from "../design/desktop-design-detail-light.jpg";
import home_pc from "../design/desktop-design-home-dark.jpg";

import detail_mb from "../design/mobile-design-detail-dark.jpg";
import home_mb from "../design/mobile-design-home-dark.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Country from "./pages/country/Country";
import Header from "./components/header/Header";

//
export interface AppProps {}

//
function App({}: AppProps) {
  //
  React.useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (IS_MOBILE) {
      html.classList.add("device-mobile");
    }
  }, []);

  //
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_contain">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name_country" element={<Country />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <div className="display-noe">
          {/* <img style={{ width: "100%" }} src={detail_pc} alt="" /> */}
          {/* <img style={{ width: "100%" }} src={home_pc} alt="" /> */}

          {/* <img style={{ width: "100%" }} src={detail_mb} alt="" /> */}
          {/* <img style={{ width: "100%" }} src={home_mb} alt="" /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
