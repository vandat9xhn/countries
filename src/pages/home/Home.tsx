import * as React from "react";

import { default_obj_country_from_list } from "../../default/country";
import { ObjCountry } from "../../types";

import { API_CountryAll_L, API_CountryRegion_L } from "../../api/countries";

import HomeCountry from "../../components/home_country/HomeCountry";
import SearchBar from "../../components/search/SearchBar";
import FilterBar from "../../components/filter/FilterBar";

import "./Home.scss";

//
export interface HomeProps {}

//
function Home({}: HomeProps) {
  //
  const [arr_country, setArrCountry] = React.useState<ObjCountry[]>([]);
  const [fetching, setFetching] = React.useState(false);

  //
  React.useEffect(() => {
    getCountries();
  }, []);

  // ---

  const getCountries = async () => {
    setFetching(true);
    const res = await API_CountryAll_L();
    setArrCountry(res.data.slice(0, 8));
    setFetching(false);
  };

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const handleFilter = async (region: string) => {
    setFetching(true);
    const res = await API_CountryRegion_L(region);
    setArrCountry(res.data.slice(0, 8));
    setFetching(false);
  };

  //
  return (
    <div className="Home">
      <div className="Home_contain">
        <div className="Home_search_filter flex space-between items-center">
          <div className="Home_search">
            <SearchBar handleSearch={handleSearch} />
          </div>

          <div className="Home_filter">
            <FilterBar handleFilter={handleFilter} />
          </div>
        </div>

        <div className="Home_countries flex space-around flex-wrap">
          {arr_country.map((item, ix) => (
            <div key={`${item.name.common}${ix}`} className="Home_country">
              <HomeCountry
                img={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital[0]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${fetching ? "" : "display-none"}`}>
        <div className={`Home_fetching`}>Loading countries...</div>
      </div>
    </div>
  );
}

export default Home;
