import { action, persist } from "easy-peasy";

export const brand = persist({
    brandName: [],
    handleMateria: action((state, payload)=>{
        payload?.data && payload.data.map(item=>{
            if(!state.brand.brandName.includes(item.name)){
                state.brand.brandName.push(item.name)
            }
        })
    })
})