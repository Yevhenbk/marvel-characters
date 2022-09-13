import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import { DetailsCardStyled, DetailsStyled, ImgStyled, HeaderStyled,
ParStyled, LinkStyled, DivStyled, ButtonStyled } from './DetailStyled'



/**
 * ! Define the Detail component
 */


const Detail = ({onClick, img, comics, description, resource, name, onError}) => {

  //* View Builder
  return (
    <DetailsStyled >
      <DetailsCardStyled>
          <ImgStyled 
          src={img} 
          alt='Heroe image' 
          onError={onError}/>
          <HeaderStyled>{name}</HeaderStyled>
          <DivStyled>
            <div>
              <ParStyled>{description}</ParStyled>
            </div>
            <div>
              <ParStyled>Resourse:</ParStyled>
              <LinkStyled href={resource} target='_blank'>{resource}</LinkStyled>
            </div>
            <div>
              <ParStyled>Comics:</ParStyled>
              <LinkStyled href={resource} target='_blank'>{comics}</LinkStyled>
            </div> 
          </DivStyled>
          <ButtonStyled onClick={onClick}>< AiOutlineClose /></ButtonStyled>
      </DetailsCardStyled>
    </DetailsStyled>
  )
}

//* Define components PropTypes
Detail.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.string,
  comics: PropTypes.string,
  description: PropTypes.string,
  resource: PropTypes.string,
  name: PropTypes.string,
  onError: PropTypes.func
}

//* Export component
export default Detail