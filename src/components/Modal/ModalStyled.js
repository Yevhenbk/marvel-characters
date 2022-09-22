import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';





//* Styled Modal
export const ModalStyled = styled.div`
    position: fixed;
    top: 0; 
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #151515a7;
    z-index:8;
`;


//* Styled Wrapper
export const WrapperStyled = styled.form`
    max-width: 25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 20rem;
    overflow: hidden;
    background: ${Tokens.Colors.Quaternary};
    color: ${Tokens.Colors.Primary};

        
`;


//* Styled Button
export const ButtonStyled = styled.input`
    background: ${Tokens.Colors.Teritary};
    color: ${Tokens.Colors.Primary};
    font-size: 18px;
    border: none;
    font-style: italic;
    font-weight: 400;
    padding: .6rem 2.75rem;
    text-align: center;
    margin: 1rem;
    &:hover {
        cursor: pointer;
        background: ${Tokens.Colors.Hover};
    }
`;


//* Styled Header
export const HeaderStyled = styled.h1`
    font-size: 21px;
    margin-left: 1rem;
`;


//* Styled Par
export const ParStyled = styled.p`
    font-size: 18px;
    margin: 1rem;
    color: ${Tokens.Colors.Quinary};
`;