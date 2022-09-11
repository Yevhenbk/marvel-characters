import React from 'react'
import { ButtonStyled, FormStyled, SearchStyled } from './SearchBarStyled'

/**
 * ! Define the SearchBar component
 */


const SearchBar = () =>{

    //* View Builder
    return (
        <FormStyled>
            <SearchStyled placeholder='Hulk, Spider-Man, ...' type="search"/>
            <ButtonStyled>Search</ButtonStyled>
        </FormStyled>
    )
}

//* Export component
export default SearchBar