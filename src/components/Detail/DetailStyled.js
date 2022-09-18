import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';
import { Tokens } from "../../static/Tokens";



//* Styled CloseIcon
export const CloseIcon = styled(AiOutlineClose)`
    color: ${Tokens.Colors.Primary};
    padding-right: 1rem;
    font-size: 28px;
    padding: .5rem;
    margin: 0;
    color: ${Tokens.Colors.Teritary};
    background: ${Tokens.Colors.Quaternary};
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
        cursor: pointer;
        color: ${Tokens.Colors.Hover}
    }
`;


//* Styled Details
export const DetailsStyled = styled.div`
    position: fixed;
    top: 0; 
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #151515a7;
    z-index: 8;
`;


//* Styled Card
export const DetailsCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    padding: .5rem .5rem 1.5rem;
    max-width: 30rem;
    min-width: 8rem;
    max-height: 100%;
    min-height: 40rem;
    position: relative;
    // filter: drop-shadow(0 0 0.05rem ${Tokens.Colors.Quinary});
    background: ${Tokens.Colors.Quaternary};
    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
        -webkit-appearance: none;
    }
`;


//* Styled Img
export const ImgStyled = styled.img`
    width: 100%;
    height: 20rem;
    object-fit: cover;
`;


//* Styled Header
export const HeaderStyled = styled.h1`
    font-size: 28px;
    padding: 1rem .75rem;
    border-top: 2px solid ${Tokens.Colors.Teritary};
    border-bottom: 2px solid ${Tokens.Colors.Teritary};
    margin-top: 1rem;
    color: ${Tokens.Colors.Primary}
`;


//* Styled Paragraph
export const ParStyled = styled.p`
    color: ${Tokens.Colors.Primary};
    font-size: 18px;
    padding: 0 .5rem;
`;


//* Styled Div
export const DivStyled = styled.div`
    display: block;
`;


//* Styled Link
export const LinkStyled = styled.a`
    color: ${Tokens.Colors.Link};
    padding: 0 .5rem;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;