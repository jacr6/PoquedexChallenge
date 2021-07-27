import React, {useContext} from 'react'
import './style.css'
import { StoreContext } from '../../context';

//create a react   whit bulma function
export default function Gallery({ children }) {


  const context = useContext(StoreContext);

  const {SinglePokemon, setSinglePokemon} = context.SinglePokemon;
  const {page, setPage} = context.page;
  const {limit} = context.limit;
  const {offset, setOffset} = context.offset;
  console.log("SINGLE: ", SinglePokemon)
 return  <div>

<img src={SinglePokemon&&SinglePokemon.sprites&&SinglePokemon.sprites.front_default}/>
<h3>{SinglePokemon&&SinglePokemon.name&&SinglePokemon.name}</h3>

 </div> 
  return (
 
    
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1"
            tabindex="0"
            className="carousel__slide">
          <div className="carousel__snapper">
            <a href="#carousel__slide5"
               className="carousel__prev">Go to last slide</a>
          
            <a href="#carousel__slide2"
               className="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide2"
            tabindex="0"
            className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide1"
             className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide3"
             className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide3"
            tabindex="0"
            className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide2"
             className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide4"
             className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide4"
            tabindex="0"
            className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide3"
             className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide5"
             className="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide5"
            tabindex="0"
            className="carousel__slide">
          <div className="carousel__snapper"></div>
          <a href="#carousel__slide4"
             className="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide1"
             className="carousel__next">Go to first slide</a>
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1"
               className="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2"
               className="carousel__navigation-button">Go to slide 2</a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3"
               className="carousel__navigation-button">Go to slide 3</a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4"
               className="carousel__navigation-button">Go to slide 4</a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide5"
               className="carousel__navigation-button">Go to slide 5</a>
          </li>
        </ol>
      </aside>
    </section>
    
     
  )
}
