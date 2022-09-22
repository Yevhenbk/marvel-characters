import React from 'react'
import PropTypes from 'prop-types'
import { DetailsCardStyled, DetailsStyled, ImgStyled, HeaderStyled,
ParStyled, LinkStyled, CloseIcon, DivStyled } from './DetailStyled'



/**
 * ! Define the Detail component
 */


const Detail = ({onClick, img, comics, description, resource, name, onError, id,
  cardClassName, detailClassName}) => {

  //* Methods

  // Check if user has a Touch Screen Device
  const isTouchDevice = () => {  
    return window.matchMedia("(pointer: coarse)").matches  
  }  
  // console.log(isTouchDevice())

  //* View Builder
  return (
    <DetailsStyled id={id} className={detailClassName}>
      <DetailsCardStyled className={cardClassName}>
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
          {isTouchDevice() ? <CloseIcon onClick={onClick} /> : <></>}
      </DetailsCardStyled>
    </DetailsStyled>
  )
}

//* Define components PropTypes
Detail.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.string,
  comics: PropTypes.string,
  description: PropTypes.string,
  resource: PropTypes.string,
  name: PropTypes.string,
  onError: PropTypes.func,
  detailClassName: PropTypes.string,
  cardClassName: PropTypes.string
}

//* Export component
export default Detail