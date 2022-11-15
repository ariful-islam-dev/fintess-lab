import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleCart = (data) => {
    const newCart = {
      id: data.id,
      title: data.attributes.title,
      quantity: 1,
    };

    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);

    if (cart) {
      cart.filter((item) => {
        if (item.id === data.id) {
          item.quantity = item.quantity + 1;
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
    let newCart = localStorage.getItem("cart");
    newCart = JSON.parse(newCart);
    setCart(newCart);
  }, []);

  return {
    cart,
    handleCart,
  };
};
