import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

// import { default_obj_country_from_list } from "../../default/country";
import { ObjCountry } from "../../types";
import { API_Country_R } from "../../api/countries";

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
  const navigate = useNavigate();

  //
  const [country, setCountry] = React.useState<ObjCountry>(null);

  //
  React.useEffect(() => {
    getCountry();
  }, []);

  // ---

  const getCountry = async () => {
    const res = await API_Country_R(name_country);
    setCountry(res.data[0])
  };

  const handleBack = () => {
    navigate(-1);
  };

  // -----

  if (!country) {
    return null;
  }

  //
  return (
    <div className="Country">
      <div className="Country_back shadow-25" onClick={handleBack}>
        Back
      </div>

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
                  value: country.altSpellings[1],
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
                { title: "Top Level Domain", value: country.tld[0] },
                { title: "Currencies", value: country.cioc },
                {
                  title: "Languages",
                  value: Object.values(country.languages)[0],
                },
              ].map((item, ix) => (
                <CountryTitleValue key={item.title} {...item} />
              ))}
            </div>
          </div>

          {!country.borders ? null : (
            <div className="Country_borders flex items-center">
              <div className="Country_borders_title font-600">
                Borders Countries:
              </div>

              <div className="flex flex-wrap">
                {country.borders.map((item, ix) => (
                  <div key={item} className="Country_borders_item shadow-25">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
