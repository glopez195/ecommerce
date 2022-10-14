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
          className="rounded-tl text-base rounded-bl ml-2 font-thin w-full text-slate-800 h-30 p-1 pl-2"
          onChange={(event) => {
            updateFilter(event);
          }}
        />
      </form>
      <Link
        className="ds px-2 py-0.5 bg-button text-background rounded-br rounded-tr border-l-1 border-l-black flex"
        to="/store"
      >
        <FaSistrix data-tip="Search" size={20} className='self-center' />
      </Link>
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
