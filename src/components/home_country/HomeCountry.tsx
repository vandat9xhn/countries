import * as React from "react";
import { Link } from "react-router-dom";

import "./HomeCountry.scss";

//
export interface HomeCountryProps {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

//
function HomeCountry({
  img,
  name,
  population,
  region,
  capital,
}: HomeCountryProps) {
  //
  return (
    <Link
      className="HomeCountry display-block color-inherit"
      to={`/detail/${name}`}
    >
      <div className="HomeCountry_top pos-rel">
        <img className="pos-abs-100per object-fit-cover" src={img} alt="" />
      </div>

      <div className="HomeCountry_content">
        <div className="HomeCountry_name">{name}</div>

        <div className="HomeCountry_info">
          <span className="HomeCountry_label">Population:</span>{" "}
          <span className="HomeCountry_value">{population}</span>
        </div>
        <div className="HomeCountry_info">
          <span className="HomeCountry_label">Region: </span>{" "}
          <span className="HomeCountry_value">{region}</span>
        </div>
        <div className="HomeCountry_info">
          <span className="HomeCountry_label">Capital:</span>{" "}
          <span className="HomeCountry_value">{capital}</span>
        </div>
      </div>
    </Link>
  );
}

export default HomeCountry;
