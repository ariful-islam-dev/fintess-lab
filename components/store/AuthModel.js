import { action, persist } from "easy-peasy";
import { toast } from 'react-toastify';
import { removeLocalStorage, setLocalStore } from "../../utils/storage";


export const authStore = persist({
    auth: {},
    authStore: action((state, payload)=>{
        const user = {
            accessToken: payload.jwt,
            user: {
                name: payload.user.username,
                email: payload.user.email,
                id: payload.user.id
            }
        }
        if(payload.user.name){
            state.auth = payload
        }else{
            state.auth = user
            setLocalStore('user', user)
            
        }
    }),
    authLogout: action((state, payload)=>{
        state.auth = {}
        removeLocalStorage('user')
        toast('Successfully Logout')
    })
})

