import * as React from "react";

import { default_obj_country_from_list } from "../../default/country";
import { ObjCountry } from "../../types";

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

  //
  React.useEffect(() => {
    getCountries();
  }, []);

  // ---

  const getCountries = async () => {
    setArrCountry(
      Array.from({ length: 10 }, (v, k) => default_obj_country_from_list)
    );
  };

  const handleSearch = (value: string) => {
    console.log(value);
  };

  const handleFilter = (region: string) => {
    console.log(region);
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
    </div>
  );
}

export default Home;
