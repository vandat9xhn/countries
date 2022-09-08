import * as React from "react";

import { handleFilterType } from "../../types";
import { ARR_REGION } from "../../constant";

import icon_down from "../../../images/icon_down.png";
import "./FilterBar.scss";

//
const FilterItem = ({
  region,
  handleFilter,
}: {
  region: string;
  handleFilter: handleFilterType;
}) => {
  //
  const onClick = () => {
    handleFilter(region);
  };

  //
  return (
    <div className="FilterItem cursor-pointer" onClick={onClick}>
      {region}
    </div>
  );
};

//
export interface FilterBarProps {
  region: string;
  handleFilter: handleFilterType;
}

//
function FilterBar({ region, handleFilter }: FilterBarProps) {
  //
  const arr_region = ARR_REGION.filter((item) => item !== region);

  //
  return (
    <div className="FilterBar">
      <div className="FilterBar_select flex space-between items-center shadow-25">
        <div>{region === "all" ? "Filter by Region" : region}</div>

        <img className="FilterBar_icon" src={icon_down} alt="" />
      </div>

      <div className="FilterBar_hr"></div>

      <div className="FilterBar_list display-none shadow-25">
        {arr_region.map((item, ix) => (
          <FilterItem key={item} region={item} handleFilter={handleFilter} />
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
