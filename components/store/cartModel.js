import { action, persist } from "easy-peasy";
import { setLocalStore } from "../../utils/storage";

export const cartStore = persist({
  cart: [],
  addCart: action((state, payload) => {

    if(Array.isArray(payload)){
      state.cart = payload
    }
    

    if (state.cart.length > 0) {
      const extCart = state.cart.find(item=>item.productId === payload.productId)
      if(extCart){

        extCart.quantity = payload.quantity;
        setLocalStore('cart', [...state.cart])
        state.cart = [...state.cart];
      }else{
        setLocalStore('cart', [...state.cart, payload])
      state.cart.push(payload)
      }
      
    }else{
      setLocalStore('cart', [payload])
      state.cart.push(payload)
    }


  }),
  removeCart: action((state, payload)=>{
    const cartItem = state.cart.filter(item=>item.productId !== payload);

    setLocalStore('cart', cartItem)
    state.cart = cartItem
  })
});
