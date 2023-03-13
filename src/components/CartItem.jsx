import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "./";
import { useStateContext } from "../contexts/ContextProvider";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const CartItem = (props) => {
  const { data, setCurrentProduct, addToCart } = useStateContext();

  const [count, setCount] = useState(props.count);

  if (data.length === 0) {
    return;
  }

  return (
    <div className={`w-full flex ${count===0 ? 'hidden' : 'block'}`}>
      <div className="m-2 w-full rounded bg-white border-gray-100 border-1 drop-shadow-lg flex justify-center none">
        <div className="p-3 flex items-center">
          <div>
            <img
              className="max-h-[250px] max-w-[120px] md:max-w-[180px] justify-self-center"
              src={data[props.item].image}
            />
          </div>
        </div>
        {/* Details */}
        <div className="w-3/5 p-1 pl-3 h-full flex flex-col gap-3 items-center">
          {/* Title */}
          <span
            className="pt-7 h-[40%] overflow-hidden flex items-center hover:text-orange-400"
            onClick={() => setCurrentProduct(data[props.item])}
          >
            <Link to="/productDetails">{data[props.item].title}</Link>
          </span>
          {/* Rating */}
          <div className="flex gap-1 items-center">
            <Rating value={data[props.item].rating.rate} />
            <span className="text-sm text-slate-500">
              ({data[props.item].rating.count})
            </span>
          </div>
          {/* Price details */}
          <div className="flex gap-2 flex-wrap">
            <div>
              $
              {data[props.item].discounted_price}
            </div>
            <span className="text-xs"> de </span>
            <div className="flex">
              <span className="text-sm">$</span>
              <span className="text-sm line-through text-slate-600">
                {data[props.item].price.toFixed(2)}
              </span>
            </div>
            <span className="text-sm text-red-600">
              -{data[props.item].discount}%
            </span>
          </div>
          {/* Take Action Button */}
          <div className="p-2 mt-2 flex justify-middle gap-2 items-center">
            <button
              className="text-background hover:text-amber-300 drop-shadow-md transition-transform hover:scale-110"
              onClick={() => {
                addToCart(data[props.item].id, "substract");
                if (count > 0) setCount(count - 1);
              }}
            >
            <MdRemoveCircle size={40}/>
            </button>
            <span className="flex border-1 justify-center items-center pl-3 pr-3">
              {count}
            </span>
            <button
              className="text-background hover:text-amber-300 drop-shadow-md transition-transform hover:scale-110"
              onClick={() => {
                addToCart(data[props.item].id);
                setCount(count + 1);
              }}
            >
              <MdAddCircle size={40}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
