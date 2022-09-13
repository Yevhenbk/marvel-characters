import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { DetailsCardStyled, DetailsStyled, ImgStyled, HeaderStyled,
ParStyled, LinkStyled, DivStyled, ButtonStyled } from './DetailStyled'

const Detail = ({onClick, img, comics, description, resource, name, onError}) => {

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

export default Detail