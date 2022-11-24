import { action, persist } from "easy-peasy";

export const warranty = persist({
    warranty: [],
    addWarranty: action((state, payload)=>{
        payload.data && payload.data.map(item=>{
            if(!state.warranty.includes(item.id)){
                state.warranty.push(item.data)
            }
        })
    })
})