import React, { useState } from "react";
import { Rating } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import "../App.css";
const ProductDetails = () => {

  const { currentProduct,addToCart } = useStateContext();
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 1000);
  };

  if ( currentProduct === undefined ) return 
 
  return (
    <div className="bg-white flex w-full h-full justify-center sm:align-middle flex-wrap pt-24 pb-10 gap-6">
      {/* Image */}
      <div className="w-[75%] max-w-[400px] md:w-[40%] h-full p-3 justify-center flex">
        <img src={currentProduct.image} alt={currentProduct.title} />
      </div>
      {/* Details */}
      <div className="w-[75%] md:w-[50%] p-1 pl-3 h-full flex flex-col gap-7">
        {/* Title */}
        <span className="pt-5 text-3xl flex items-center">
          {currentProduct.title}
        </span>
        {/* Rating */}
        <div className="flex gap-1 items-center justify-end">
          <Rating value={currentProduct.rating.rate} />
          <span className="text-lg text-slate-500">
            ({currentProduct.rating.count})
          </span>
        </div>
        {/* Price details */}
        <div className="flex gap-2 text-3xl">
          <div>
            {"\u20AC"}
            {currentProduct.discounted_price}
          </div>
          <span className="text-base"> de </span>
          <div className="flex">
            <span className="text-lg">{"\u20AC"}</span>
            <span className="text-lg line-through text-slate-600">
              {currentProduct.price.toFixed(2)}
            </span>
          </div>
          <span className="text-lg text-red-600">
            -{currentProduct.discount}%
          </span>
          {/* Description */}
        </div>
          <p className="text-xl">
            {currentProduct.description}
          </p>
        {/* Take Action Button */}
        <div className="p-2 flex justify-center mt-10 gap-7">
          <button className="text-black text-xl bg-amber-500   hover:bg-amber-300 pt-2 pb-2 pr-4 pl-4 rounded-full drop-shadow-md" onClick={() => {addToCart(currentProduct.id);
        showNotification()}}>
            Add to Cart
          </button>
        </div>
      </div>
      <div
        className={`notification text-2xl text-amber-900 text-center ${
          notification ? "notification-fade-out" : ""
        }`}
      >
        <span className="text-white">Added to the cart!</span>
      </div>
    </div>
  );
};

export default ProductDetails;
