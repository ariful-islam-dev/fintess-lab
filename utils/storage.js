
const getLocalStore=(key)=>{
   const data =  localStorage.getItem(key);
   return JSON.parse(data)

}


const setLocalStore =(key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
    return {message: 'Data Successfully set storage'}
}


const removeLocalStorage = (key)=>{
    localStorage.removeItem(key);
    return {message: 'Successfully Remove'}
}

export { getLocalStore, setLocalStore, removeLocalStorage };

