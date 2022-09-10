import React from 'react'
import PropTypes from 'prop-types'
import { DivStyled, ImgStyled, TitleStyled } from './Card.Styled'


/**
 * ! Define the Card component
 */


const Card = ({img, title}) => {

  //* View Builder
  return (
    <DivStyled>
        <ImgStyled src={img} alt='Heroe image' />
        <TitleStyled>{title}</TitleStyled>
    </DivStyled>
  )
}

//* Define components PropTypes
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string
};

//* Export component
export default Card