import React, { useState } from "react";
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
      setTimeout(()=>{
        reset();
      }, 2000)
    }, 3000);
  };

  return (
    <div className="bg-slate-200 h-screen flex flex-col items-center canva">
      <div className="bg-slate-200 w-full fixed z-10 h-28 mt-20"></div>
      <div className="w-[90%] flex flex-col justify-between bg-white mt-24 fixed h-28 z-10 border-b-1">
        <span className="flex justify-around pt-8 text-2xl font-semibold items-center text-background drop-shadow-lg">
          <TiShoppingCart
            className="hover:scale-110 transition-all"
            size={50}
          />
          <span>
            Total: {"\u20AC"}
            {total}
          </span>
        </span>
      </div>
      <div
        className={`flex flex-col pt-56 gap-4 bg-white w-[90%] ${
          animation ? "slide-rotate-hor-top" : ""
        }`}
      >
        {Object.keys(cart).map((key, index) => {
          if (cart[key] !== 0) {
            return <CartItem key={index} item={key - 1} count={cart[key]} />;
          }
        })}
        <div className="flex p-10 justify-center">
          <button
            className="bg-amber-500 pt-3 pb-3 pl-6 pr-6 text-background rounded-full text-2xl hover:bg-background  hover:text-amber-500 drop-shadow-lg"
            onClick={() => {
              if(items_in_cart === 0) return;
              sependThaMoney();
            }}
          >
            Pagar
          </button>
        </div>
      </div>
      <div className="bg-slate-200 fixed -z-10 h-full w-full"></div>
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
