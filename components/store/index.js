import { createStore, persist } from "easy-peasy";
import { brand } from "./brandModel";
import { filterCategory } from "./filterCategoryMedel";
import { menu } from "./menuModel";
import { warranty } from "./warrantyModel";
const store = createStore(persist({
 menu: menu,
 brand: brand,
 category: filterCategory,
 warranty: warranty,
  
}));



export default store;
