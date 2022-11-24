import { createStore } from "easy-peasy";
import { authStore } from "./AuthModel";
import { brand } from "./brandModel";
import { cartStore } from "./cartModel";
import { menu } from "./menuModel";
import { warranty } from "./warrantyModel";
const store = createStore({
auth: authStore,
 menu: menu,
 brand: brand,
 warranty: warranty,
 cart: cartStore
});



export default store;
