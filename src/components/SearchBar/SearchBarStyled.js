import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';




//* Styled Search
export const SearchStyled = styled.input`
    font-size: 18px;
    outline: none;
    color: ${Tokens.Colors.Primary};
    background: ${Tokens.Colors.Quaternary};
    height: 48.6px;
    border: none;
    border-radius: 2px 0 0 2px;
    padding-left: 1rem;
    width: 246.74px;
    // filter: drop-shadow(0 0 0.05rem ${Tokens.Colors.Quinary});
    // border-bottom: 2px solid ${Tokens.Colors.Teritary};
    &::placeholder {
        font-style: italic;
        color: ${Tokens.Colors.Quinary};
    }
    &:focus {
        color: ${Tokens.Colors.Primary};
    }
    &:active {
        color: ${Tokens.Colors.Primary};
    }
`;


//* Styled Form
export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${Tokens.Colors.Quaternary};
    border-radius: 2px;

    @media screen and (max-width: 812px) {
        margin-bottom: 4rem;
    }
`