import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';



//*Styled Button
export const ButtonStyled = styled.button`
    font-size: 21px;
    background: ${Tokens.Colors.Teritary};
    color: ${Tokens.Colors.Primary};
    border: none;
    padding: .75rem 1.75rem;
    clip-path: polygon(
        0 0,
        100% 0,
        100% 67%,
        88% 100%,
        0 100%
    );
    &:hover {
        cursor: pointer;
        background: ${Tokens.Colors.Hover}
    }
`;


//* Styled Search
export const SearchStyled = styled.input`
    font-size: 18px;
    outline: none;
    background: ${Tokens.Colors.Quaternary};
    height: 46.6px;
    border: none;
    padding-left: 1rem;
    width: 246.74px;
    filter: drop-shadow(0 0 0.05rem ${Tokens.Colors.Quinary});
    // border-bottom: 2px solid ${Tokens.Colors.Teritary};
    &::placeholder {
        font-style: italic;
    }
    &:active {
        color: ${Tokens.Colors.Primary}
    }
    &:focus {
        color: ${Tokens.Colors.Primary}
    }
`;


//* Styled Form
export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 812px) {
        margin-bottom: 4rem;
    }
`