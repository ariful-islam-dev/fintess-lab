import { action } from "easy-peasy"

export const filterCategory={
    
    type: undefined,
    name: undefined,
    handleCategory: action((state, payload)=>{
    state.type = payload.value,
    state.name = payload.children
   }),

}