import { useState, useEffect, useContext } from "react";
import  {comSinglePokemon}  from "../../communications/comSinglePokemon";
import { StoreContext } from '../../context';

export const useSinglePokemon = () => {
    const context = useContext(StoreContext);

    const {SinglePokemon, setSinglePokemon} = context.SinglePokemon;
    const [complete, setComplete] = useState(); 
    const [error, setError] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await comSinglePokemon(SinglePokemon);
                const { data, state } = response;
                if (state) {
                    setSinglePokemon(data)
                    setComplete(true);
                }


            } catch (error) {
                setError(error)
            }
        }
        !complete&&SinglePokemon&&SinglePokemon.id&&fetchData()
    }, [SinglePokemon])

    return {
        SinglePokemon, setSinglePokemon, setComplete
    }
}

export default useSinglePokemon
