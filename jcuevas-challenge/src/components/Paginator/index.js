import React, { useContext } from 'react';
import './style.css';
import { StoreContext } from '../../context';
import useSinglePokemon from '../../hooks/useSinglePockemon';
//create a react  button control whit bulma function
const Paginator = ({ activePage, onClick }) => {

    const context = useContext(StoreContext);
    const {page, setPage} = context.page;
    const {limit} = context.limit;
    const {offset, setOffset} = context.offset;

    const {SinglePokemon, setSinglePokemon, setComplete} = useSinglePokemon();

    const fakeArray = [1, 2, 3, 4, 5];
    function mod(value){
        return ((value - (value % limit))/limit)
          
        }

    const PaginatorHandler = (value) => {

        if (page >= 2) {

            setPage(page+value)
            setOffset(mod(page));
            setSinglePokemon({id:page+value})
            setComplete(false)

        }
           
      
        
    }

    const DetailPokemonHandler = (value) => {
        setPage(value)
        setSinglePokemon({id:value})
        setComplete(false)
    }

    return (
        <div className="pagination">
            <a onClick={()=>PaginatorHandler(-1)} href="#">&laquo;</a>
            {fakeArray.map((item, index) => {
                
              return <a onClick={()=>DetailPokemonHandler(item+(offset*fakeArray.length))}  className={page==item+(offset*fakeArray.length)&&"active"} href="#">{item+(offset*fakeArray.length)}</a>

            })}
        
            <a onClick={()=>PaginatorHandler(1)} href="#">&raquo;</a>
        </div>
    )
};

export default Paginator;