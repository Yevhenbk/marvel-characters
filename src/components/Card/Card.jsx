import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Detail from '../Detail/Detail'
import { DivStyled, ImgStyled, TitleStyled, CardStyled, ButtonStyled, WrapperStyled } from './CardStyled'



/**
 * ! Define the Card component
 */


const Card = ({img, title, onError, detailImg, detailName, detailComics, 
detailDescription, detailResource, detailOnError}) => {

  // Defining states
  const [isOpen, setIsOpen ] = useState(false)

  //* Methods
  if (isOpen == true) {
    document.body.classList.add("no-scroll")
  } else {
    document.body.classList.remove("no-scroll")
    document.body.classList.add("scroll")
  }

  //* View Builder
  return (
    <>
    <DivStyled>
        <CardStyled>
          <ImgStyled 
          src={img} 
          alt='Heroe image' 
          onError={onError}/>
          <WrapperStyled>
            <TitleStyled>{title}</TitleStyled>
            <ButtonStyled onClick={() => setIsOpen(true)}>Learn more</ButtonStyled>
          </WrapperStyled>
        </CardStyled>
    </DivStyled>
    {isOpen ? 
      <Detail 
      img={detailImg}
      name={detailName}
      description={detailDescription}
      comics={detailComics}
      resource={detailResource}
      onError={detailOnError}
      onClick={() => setIsOpen(false)}/> 
      : <></>
    }
    </>
  )
}

//* Define components PropTypes
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  onError: PropTypes.func,
  detailImg: PropTypes.string,
  detailName: PropTypes.string,
  detailComics: PropTypes.string,
  detailDescription: PropTypes.string,
  detailResource: PropTypes.string,
  detailOnError: PropTypes.func
}

//* Export component
export default Card