import { action, persist } from "easy-peasy";
import { setLocalStore } from "../../utils/storage";

export const cartStore = persist({
  cart: [],
  addCart: action((state, payload) => {
    console.log(payload)
    if(state.cart.length === 0){
      if(payload?.productId){
        state.cart.push(payload)
        setLocalStore('cart', JSON.stringify([payload]))
      }
      else{
        state.cart = [...payload.userCart]
      }
    }

    if (state.cart.length > 0) {
      const extCart = state.cart.filter((item) => {
        if (item.id === payload.productId) {
         return item.productId !== payload.productId  
        } 
      });
      state.cart = [...extCart, payload];
      setLocalStore('cart', JSON.stringify([...extCart, payload]))
    }


  }),
});
