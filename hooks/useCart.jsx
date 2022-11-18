import { useEffect, useState } from "react";
import { getLocalStore } from "../utils/storage";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleCart = (data) => {
    const newCart = {
      ...data,
    };

    let cart = getLocalStore("cart");

    if (cart) {
      cart.filter((item) => {
        if (item.id === data.id) {
          localStorage.setItem("cart", JSON.stringify([...cart, newCart]));
          setCart((prev) => [...prev, newCart]);
        } else {
          localStorage.setItem("cart", JSON.stringify([...cart, newCart]));
          setCart([newCart]);
        }
      });
    } else {
      localStorage.setItem("cart", JSON.stringify([newCart]));
      setCart([newCart]);
    }
  };

  useEffect(() => {
    let newCart = getLocalStore("cart");
    setCart(newCart);
  }, []);

  return {
    cart,
    handleCart,
  };
};
