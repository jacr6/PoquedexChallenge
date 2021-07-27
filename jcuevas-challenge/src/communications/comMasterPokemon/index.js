
import { fetchHandler } from "../fetchhandler"

export async function comMasterPokemon(body) {

  return await fetchHandler("get", process.env.REACT_APP_POKEMON, body)
    .then(result => result)
    .catch(error => error)
}
