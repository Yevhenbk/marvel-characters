import React from 'react'
import PropTypes from 'prop-types'
import { FormStyled, SearchStyled } from './SearchBarStyled'



/**
 * ! Define the SearchBar component
 */


const SearchBar = ({onChange, placeholder, value, children}) =>{

    //* View Builder
    return (
        <FormStyled>
            <SearchStyled placeholder={placeholder} type="text" onChange={onChange} value={value} />
            {children}
            {/* <SearchIcon /> */}
        </FormStyled>
    )
}

//* Define components PropTypes
SearchBar.propTypes = {
    children: PropTypes.any,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

//* Export component
export default SearchBar