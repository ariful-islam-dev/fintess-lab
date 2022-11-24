import { action, persist } from "easy-peasy";
import { getLocalStore, setLocalStore } from "../../utils/storage";

export const cartStore = persist({
  cart: [],
  addCart: action((state, payload) => {
    let localCart = getLocalStore("cart");

    if (localCart) {
      cart.filter((item) => {
        if (item.id === payload.data.id) {
          setLocalStore("cart", JSON.stringify([...state.cart, payload.data]));
          state.cart.push(item);
        } else {
          state.cart.push(payload.data);
          setLocalStore("cart", JSON.stringify([...state.cart, payload.data]));
        }
      });
    } else {
      setLocalStore("cart", JSON.stringify([payload.data]));
      state.cart.push(payload.data);
    }
  }),
});
