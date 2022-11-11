import { action } from "easy-peasy"

export const filterCategory={
    category: null,

   handleCategory: action((state, payload)=>{
    state.category = payload
   }),

}