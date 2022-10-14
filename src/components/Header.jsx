import React from "react";
import { SearchBar } from "./";
import { MdAccountCircle } from "react-icons/md";
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useStateContext } from "../contexts/ContextProvider";

const Header = () => {
  const {items_in_cart} = useStateContext();

  return (
    <div className="bg-background fixed text-headline p-5 pl-7 pr-7 flex gap-4 align-middle w-full h-20 z-50">
      <Link to="/" className="self-center hover:text-red-400">
        <FaStore data-tip="Store" size={30} />
      </Link>
      <SearchBar />
      <Link to="/userProfile" className="self-center hover:text-red-400">
        <MdAccountCircle data-tip="Profile" size={30} />
      </Link>
      <Link to="/cart" className="self-center relative hover:text-red-400">
        <FaShoppingCart data-tip="Cart" size={30} 
        />
        <span className={`w-[15px] h-[15px] bg-red-600 rounded-full absolute top-[-4px] transition-all right-[-9px] text-center flex justify-center items-center text-xs ${items_in_cart!=0?'block':'hidden'}`}>{items_in_cart}</span>
      </Link>
      <ReactTooltip class="z-50" place="bottom" type="info" effect="solid" />
    </div>
  );
};

export default Header;
