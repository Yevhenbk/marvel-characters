import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled, FormStyled, SearchStyled } from './SearchBarStyled'

/**
 * ! Define the SearchBar component
 */


const SearchBar = ({onChange}) =>{

    //* View Builder
    return (
        <FormStyled>
            <SearchStyled placeholder='Hulk, Spider-Man, ...' type="search" onChange={onChange}/>
            <ButtonStyled>Search</ButtonStyled>
        </FormStyled>
    )
}

//* Define components PropTypes
SearchBar.propTypes = {
    onChange: PropTypes.func
};

//* Export component
export default SearchBar