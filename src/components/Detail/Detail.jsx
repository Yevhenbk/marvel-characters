import React from 'react'
import PropTypes from 'prop-types'
import { DetailsCardStyled, DetailsStyled, ImgStyled, HeaderStyled,
ParStyled, LinkStyled, CloseIcon, DivStyled } from './DetailStyled'



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
          <div>
            <DivStyled>
              <ParStyled>{description}</ParStyled>
            </DivStyled>
            <DivStyled>
              <ParStyled>Resourse:</ParStyled>
              <LinkStyled href={resource} target='_blank'>{resource}</LinkStyled>
            </DivStyled>
            <DivStyled>
              <ParStyled>Comics:</ParStyled>
              <LinkStyled href={resource} target='_blank'>{comics}</LinkStyled>
            </DivStyled> 
          </div>
          <CloseIcon onClick={onClick} />
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