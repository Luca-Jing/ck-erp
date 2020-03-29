import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";

const Search: React.FunctionComponent<{}> = () => {
  return (
    <div className="hierarchy__leftbox__search">
      <div className="hierarchy__leftbox__search__container">
        <FaSearch className="hierarchy__leftbox__search__icon" />
        <input
          placeholder="搜索"
          className="hierarchy__leftbox__search__input"
        />
      </div>
    </div>
  );
};

export default Search;
