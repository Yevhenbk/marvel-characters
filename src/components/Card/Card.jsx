import React from 'react'
import PropTypes from 'prop-types'
import { DivStyled, ImgStyled, TitleStyled, CardStyled, ButtonStyled, WrapperStyled } from './Card.Styled'


/**
 * ! Define the Card component
 */


const Card = ({img, title, onError, onClick}) => {

  //* View Builder
  return (
    <DivStyled>
        <CardStyled>
          <ImgStyled 
          src={img} 
          alt='Heroe image' 
          onError={onError}/>
          <WrapperStyled>
            <TitleStyled>{title}</TitleStyled>
            <ButtonStyled onClick={onClick}>Learn more</ButtonStyled>
          </WrapperStyled>
        </CardStyled>
    </DivStyled>
  )
}

//* Define components PropTypes
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  onError: PropTypes.func,
  onClick: PropTypes.func
};

//* Export component
export default Card