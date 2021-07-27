import { useState, useEffect, useContext } from "react";
import { comMasterPokemon } from "../../communications/comMasterPokemon";
import {StoreContext} from "../../context"

export const useMasterPokemon = () => {
    const context = useContext(StoreContext)
    const {offset} = context.offset
    const {limit} = context.limit
    const [MasterPokemon, setMasterPokemon] = useState({limit, offset});
    const [error, setError] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await comMasterPokemon(MasterPokemon);
                const { data, state } = response;
                if (state) {
                    setMasterPokemon(data)
                }


            } catch (error) {
                setError(error)
            }
        }
        offset&&MasterPokemon.limit&&fetchData()
    }, [offset])

    return {
        MasterPokemon, setMasterPokemon, error
    }
}

export default useMasterPokemon
