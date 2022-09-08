import * as React from "react";
import { useParams } from "react-router-dom";

import { default_obj_country_from_list } from "../../default/country";
import { ObjCountry } from "../../types";

import "./Country.scss";

//
const CountryTitleValue = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="CountryTitleValue">
      <span className="CountryTitleValue_title font-600">{title}:</span>{" "}
      <span className="CountryTitleValue_value">{value}</span>
    </div>
  );
};

//
export interface CountryProps {}

//
function Country({}: CountryProps) {
  //
  const { name_country } = useParams();

  //
  const [country, setCountry] = React.useState<ObjCountry>(null);

  //
  React.useEffect(() => {
    getCountry();
  }, []);

  // ---

  const getCountry = async () => {
    console.log(name_country);
    setCountry(default_obj_country_from_list);
  };

  // -----

  if (!country) {
    return null;
  }

  //
  return (
    <div className="Country">
      <div className="Country_back shadow-25">Back</div>

      <div className="Country_row flex items-center space-between">
        <div className="Country_left Country_col">
          <img
            className="Country_img object-fit-cover shadow-25"
            src={country.flags.png}
            alt=""
          />
        </div>

        <div className="Country_right Country_col">
          <div className="Country_right_row flex items-center space-between">
            <div className="Country_right_col Country_right_left">
              <div className="Country_name">{country.name.common}</div>

              {[
                {
                  title: "Native Name",
                  value: country.name.nativeName.fin.official,
                },
                { title: "Population", value: country.population },
                { title: "Region", value: country.region },
                { title: "Subregion", value: country.subregion },
                { title: "Capital", value: country.capital[0] },
              ].map((item, ix) => (
                <CountryTitleValue key={item.title} {...item} />
              ))}
            </div>

            <div className="Country_right_col Country_right_right">
              {[
                { title: "Top Level Domain", value: "" },
                { title: "Currencies", value: country.currencies.EUR.name },
                { title: "Languages", value: country.languages.fin },
              ].map((item, ix) => (
                <CountryTitleValue key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="Country_borders flex items-center">
            <div className="Country_borders_title font-600">
              Borders Countries:
            </div>

            <div className="flex">
              {country.borders.map((item, ix) => (
                <div
                  key={item}
                  className="Country_borders_item shadow-25"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
