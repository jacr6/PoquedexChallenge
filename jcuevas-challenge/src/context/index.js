import React, { useEffect, useState } from 'react' 
import localforage from 'localforage'
localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'localStorage'
});
 
export const StoreContext = React.createContext(null)
export let context
export let Data = { }
export const ManageData = (key, value) => {

    if (!value) {
        return Data[key]
    } else {
        Data[key] = value 
    }
}
 
export default ({ children }) => {
  
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [SinglePokemon, setSinglePokemon] = useState();
    const global = {
      offset:{offset, setOffset},
      limit:{limit, setLimit},
      page:{page, setPage},
      SinglePokemon:{SinglePokemon, setSinglePokemon}
    }
    context = global
   
    return <StoreContext.Provider value={{ ...global }}>
            {children}
    </StoreContext.Provider>
}
