import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useStateContext } from "../contexts/ContextProvider";
import { CartItem, Payment } from "../components";
import "../App.css";

const Cart = () => {
  const [animation, setAnimation] = useState(false);
  const [aprovedPayment, setAprovedPayment] = useState(false);
  const { cart, total, reset, items_in_cart } = useStateContext();

  const sependThaMoney = () => {
    setAnimation(true);
    setTimeout(() => {
      setAprovedPayment(true);
      setTimeout(() => {
        reset();
      }, 2000);
    }, 3000);
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center canva">
      <div className="w-[90%] bg-slate-200 fixed flex flex-col justify-between mt-24 h-28 z-50 border-b-1">
        <span className="flex  justify-around p-8 text-2xl font-semibold items-center text-background drop-shadow-lg">
          <Link to="/store">
            <TiShoppingCart
              className="hover:scale-110 transition-all"
              size={50}
            />
          </Link>
          <span>
            Total: $
            {total}
          </span>
        </span>
      </div>
      <div
        className={`flex flex-col mt-28 pt-28 gap-4 bg-white w-[90%] ${
          animation ? "slide-rotate-hor-top" : ""
        }`}
      >
        {Object.keys(cart).map((key, index) => {
          if (cart[key] !== 0) {
            return <CartItem key={index} item={key - 1} count={cart[key]} />;
          }
        })}
        <div className="flex gap-16 p-10 justify-center text-sm text-red-400">
          {items_in_cart === 0 ? "*Add somthing to the cart." : ""}
          <button
            className={`bg-amber-500 pt-3 pb-3 pl-6 pr-6 text-background rounded-full text-2xl  drop-shadow-lg ${
              items_in_cart === 0
                ? "text-gray-500 bg-amber-200"
                : "hover:bg-background  hover:text-amber-500"
            }`}
            onClick={() => {
              if (items_in_cart === 0) return;
              sependThaMoney();
            }}
          >
            Pay
          </button>
        </div>
      </div>
      <div
        className={`p-10 rounded-full absolute z-[500] top-[40vh] flex-col items-center drop-shadow-xl bg-opacity-80 bg-background transition-all ${
          animation ? "flex" : "hidden"
        }`}
      >
        <Payment value={aprovedPayment} />
      </div>
      <div
        className={`opacity-0 -z-30 rounded-full w-1/2 h-1/2 absolute top-[40vh] bg-background ${
          aprovedPayment ? "grow-crazy" : ""
        }`}
      ></div>
    </div>
  );
};

export default Cart;
