import * as React from "react";

import { handleSearchType } from "../../types";

import icon_key from "../../../images/icon_key.png";

import "./SearchBar.scss";

//
export interface SearchBarProps {
  handleSearch: handleSearchType;
}

//
function SearchBar({ handleSearch }: SearchBarProps) {
  //
  const [value, setValue] = React.useState("");

  // ----

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onSearch = () => {
    handleSearch(value);
  };

  //
  return (
    <div className="SearchBar flex box-shadow-around">
      <div
        className="SearchBar_left flex items-center justify-center cursor-pointer"
        onClick={onSearch}
      >
        <img
          className="SearchBar_icon_key object-fit-cover"
          src={icon_key}
          alt=""
        />
      </div>

      <div className="grow-1">
        <input
          className="SearchBar_ip w-100per"
          type="text"
          placeholder="Search for a country..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default SearchBar;
