import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState({});
  const [total, setTotal] = useState("0.00");
  const [items_in_cart, setItemsInCar] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(undefined);

  const reset = () => {
    setTotal("0.00");
    setCart({});
    setItemsInCar(0);
  };

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  const addToCart = (id, action = "add") => {
    let temp_dict = cart;
    if (cart[id] === undefined && action === "add") {
      temp_dict[id] = 1;
      setTotal((parseFloat(total) + data[id - 1].discounted_price).toFixed(2));
      setItemsInCar(items_in_cart + 1);
    } else {
      if (action === "add") {
        temp_dict[id] += 1;
        setTotal(
          (parseFloat(total) + data[id - 1].discounted_price).toFixed(2)
        );
        setItemsInCar(items_in_cart + 1);
      } else if (temp_dict[id] === 0) temp_dict[id] = 0;
      else {
        temp_dict[id] -= 1;
        setTotal(
          (parseFloat(total) - data[id - 1].discounted_price).toFixed(2)
        );
        setItemsInCar(items_in_cart - 1);
      }
    }
    setCart(temp_dict);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://fakestoreapi.com/products");
      let productData = await res.json();
      productData.map((item) => {
        const discount = (Math.random() * 27).toFixed(2);
        item["discount"] = parseFloat(discount);
        const discounted_price = (
          item.price -
          (item.discount * item.price) / 100
        ).toFixed(2);
        item["discounted_price"] = parseFloat(discounted_price);
      });
      setData(productData);
    }
    async function getProfile() {
      const res = await fetch("https://randomuser.me/api/");
      let profileData = await res.json();
      setProfile(profileData.results[0]);
    }
    getData();
    getProfile();
  }, []);

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
        currentProduct,
        setCurrentProduct,
        cart,
        addToCart,
        total,
        profile,
        items_in_cart,
        reset,
        updateFilter,
        filter,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
