import React, { useState, useEffect } from 'react'
import { ModalStyled, WrapperStyled, HeaderStyled, ParStyled, ButtonStyled } from './ModalStyled'



/**
 * ! Define the Modal component
 */


function Modal() {

  // Defining states
  const [isClosed, setIsClosed ] = useState(false)

  //* Methods

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    const modal = document.getElementById('modal')

    if (event.target === modal) {
      setIsClosed(false)
    }
  }

  useEffect(() => {
    // Setting isClosed to true onload in order to make
    // the function below to work
    setIsClosed(true)
  }, [])

  if (isClosed === true) {
    document.body.classList.add("no-scroll")
  } else {
    document.body.classList.remove("no-scroll")
    document.body.classList.add("scroll")
  }

  //* View Model
  return (
      <ModalStyled className={isClosed ? 'show' : 'closed'} id='modal'>
        <WrapperStyled className={isClosed ? 'wrapper-show' : 'wrapper-closed'}>
            <HeaderStyled>Hey, there &#128075;</HeaderStyled>
            <ParStyled>Welcome to Marvel Characters! This is a project developed for Appspace assignment, and if
                you are reading this you are probably about to review my code :) Before you do it I would like to 
                leave some comments:
            </ParStyled>
            <ParStyled>In this project I am using react js with styled-components; for generating a hash for api route I am 
                using md5 from crypto-js library; for api calls I am using axios; 
                the rest of the components are developed from scratch (hope you appreciate that) and 
                in some cases icons from react-icons library are used.
            </ParStyled>
            <ParStyled>Enjoy!</ParStyled>
            <ButtonStyled type='button' value='Understood' onClick={() => setIsClosed(false)} />
        </WrapperStyled>
    </ModalStyled>
  )
}

//* Export component
export default Modal