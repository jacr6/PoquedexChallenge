
import { fetchHandler } from "../fetchhandler"

export async function comSinglePokemon(body) {

  return await fetchHandler("get", process.env.REACT_APP_POKEMON+"/"+body.id)
    .then(result => result)
    .catch(error => error)
}
