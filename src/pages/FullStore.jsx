import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Product } from "../components";
import "../App.css";

const FullStore = () => {
  const { data, filter } = useStateContext();
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 1000);
  };


  return (
    <div className=" bg-slate-200">
      <div className="flex gap-10 p-3 pt-24 flex-wrap justify-center">
        {data.map((item,index) => {
          if (!(((item.title).toLowerCase()).includes((filter).toLowerCase())) &&
          !(((item.category).toLowerCase()).includes((filter).toLowerCase()))
          ){ if (index === Object.keys(data).length - 1){
            return (
            <div key={item.id} className="flex w-full h-[100vh] justify-center align-middle pt-5 text-center">
              No se han encontrado resultados para "{filter}"
            </div>
          );}
          else return
            }
          return (
            <div key={item.id} className="h-64 w-[90%] md:w-2/5">
              <Product item={item} func={showNotification} />
            </div>
          );
        })}
      </div>
      <div
        className={`notification text-2xl text-amber-900 text-center ${
          notification ? "notification-fade-out" : ""
        }`}
      >
        <span className="text-white">Añadido al carrito!</span>
      </div>
    </div>
  );
};

export default FullStore;
