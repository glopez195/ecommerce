import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "./";
import { useStateContext } from "../contexts/ContextProvider";

const Product = ({ item,func }) => {
  const { setCurrentProduct, addToCart } = useStateContext();

  return (
    <div className="bg-white flex w-full drop-shadow-lg h-full justify-center align-middle rounded-lg">
      {/* Image */}
      <div className="w-3/5 h-[90%] p-3 justify-center flex">
        <img className="hover:scale-105 transition-all" src={item.image} />
      </div>
      {/* Details */}
      <div className="w-3/5 p-1 pl-3 h-full flex flex-col gap-3">
        {/* Title */}
        <span
          className="pt-7 h-[40%] overflow-hidden flex items-center hover:text-orange-400"
          onClick={() => 
            setCurrentProduct(item)
          }
        >
          <Link to="/productDetails">{item.title}</Link>
        </span>
        {/* Rating */}
        <div className="flex gap-1 items-center">
          <Rating value={item.rating.rate} />
          <span className="text-sm text-slate-500">({item.rating.count})</span>
        </div>
        {/* Price details */}
        <div className="flex gap-2 flex-wrap">
          <div>
            {"\u20AC"}
            {item.discounted_price}
          </div>
          <span className="text-xs"> de </span>
          <div className="flex">
            <span className="text-sm">{"\u20AC"}</span>
            <span className="text-sm line-through text-slate-600">
              {item.price.toFixed(2)}
            </span>
          </div>
          <span className="text-sm text-red-600">-{item.discount}%</span>
        </div>
        {/* Take Action Button */}
        <div className="p-2 flex justify-end">
          <button className="text-black text-sm bg-amber-500 pt-2 pb-2 pr-4 pl-4 rounded-full hover:bg-amber-300 drop-shadow-md" onClick={() =>{
            addToCart(item.id);
            func();
        }
        }>
          Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
