import { action } from "easy-peasy"

export const menu = {
    menu: {
        men: [],
        women: [],
        accessories: [],
        exercise: [],
       },
    addMenu: action((state, payload) => {
    
        payload.map(item=> 
         {
          if(item.attributes.Name === 'Men'){
            !state.menu.men.includes(item.attributes.Type) && state.menu.men.push(item.attributes.Type)
          }
          if(item.attributes.Name === 'Women'){
            !state.menu.women.includes(item.attributes.Type) && state.menu.women.push(item.attributes.Type)
          }
          
          if(item.attributes.Name === 'Accessories'){
            !state.menu.accessories.includes(item.attributes.Type) && state.menu.accessories.push(item.attributes.Type)
          }
          
          if(item.attributes.Name === 'Exercise'){
            !state.menu.exercise.includes(item.attributes.Type) && state.menu.exercise.push(item.attributes.Type)
          }
    
         }
          )
      }),
}