import React,{useState, useEffect,useContext} from 'react'
import Gallery from '../../components/Gallery'
import Paginator from '../../components/Paginator'
import useMasterPokemon from '../../hooks/useMasterPockemon'
import {StoreContext} from "../../context"

//create a react  container whit bulma function
const Home = ()=> {
const context = useContext(StoreContext)
const {offset} = context.offset
const {MasterPokemon, setMasterPokemon} = useMasterPokemon(offset)

console.log("MASTER: ", MasterPokemon)
  return (
    <div className="container">
      <h1>{process.env.REACT_APP_POKEMON}</h1>
      <Gallery/>
      <Paginator/>
    </div>
  )
}



 
export default Home
