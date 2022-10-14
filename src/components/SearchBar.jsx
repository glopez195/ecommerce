import React from "react";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import { useStateContext } from "../contexts/ContextProvider";

const SearchBar = () => {
  const { updateFilter } = useStateContext();

  return (
    <div className="w-full mr-5 align-middle flex">
      <form className="flex ml-3 w-full">
        <input
          className="rounded-tl text-base rounded-bl ml-2 h-10 font-thin w-full text-slate-800 p-1 pl-2"
          onChange={(event) => {
            updateFilter(event);
          }}
        />
        <Link to="/store">
          <button
            className="px-2 py-0.5 bg-button h-10 text-background rounded-br rounded-tr border-l-1 border-l-black flex"
            type="submit"
          >
            <FaSistrix data-tip="Search" size={25} className="self-center" />
          </button>
        </Link>
      </form>
      <ReactTooltip
        className="z-50"
        place="bottom"
        type="light"
        effect="solid"
      />
    </div>
  );
};

export default SearchBar;
