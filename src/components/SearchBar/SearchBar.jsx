import React, { useRef } from 'react'
import fetchHeroes from '../FetchHeroes/FetchHeroes'

/**
 * ! Define the SearchBar component
 */


const SearchBar = ({setter}) =>{

    let input = useRef("");

    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === "") return;

        try {
            let heroes = await fetchHeroes(value);
            setter(heroes)
        } catch (err) {
            console.error(err)
        }

    }

    //* View Builder
    return (
        <form>
            <input type="text" ref={input}/>
            <button onClick={handleClick}></button>
        </form>
    )
}

//* Export component
export default SearchBar