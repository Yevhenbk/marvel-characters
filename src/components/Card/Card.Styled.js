import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';



//* Styled Div
export const DivStyled = styled.div`
  filter: drop-shadow(0 0 0.05rem ${Tokens.Colors.Quinary});
`;


//* Stiled Card
export const CardStyled = styled.div`
  background: ${Tokens.Colors.Quaternary};
  width: 17rem;
  padding: .5rem;
  text-align: center;
  position:relative;
  clip-path: polygon(
    100% 0,
    12% 0,
    0 12%,
    0 100%,
    88% 100%,
    100% 88%
  )
`;


//* Styled Image
export const ImgStyled = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  clip-path: polygon(
    100% 0,
    100% 100%,
    0 100%,
    0 18%,
    12% 0
  )
`

//* Styled Title
export const TitleStyled = styled.h3`
  font-size: 21px;
  font-weight: 500;
  text-align: left;
  padding-left: .5rem;
  padding-top: .5rem;
  margin: 0;
  color: ${Tokens.Colors.Primary}
`;


//* Styled Wrapper
export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 8rem;
`;


//* Styled Button
export const ButtonStyled = styled.button`
    background: ${Tokens.Colors.Teritary};
    color: ${Tokens.Colors.Primary};
    font-size: 14px;
    border: none;
    font-style: italic;
    font-weight: 400;
    padding: .6rem 2.75rem;
    text-align: right;
    clip-path: polygon(
      100% 0,
      0 0,
      0 100%,
      88% 100%,
      98% 0
    );
    &:hover {
      cursor: pointer;
      background: ${Tokens.Colors.Hover}
    }
`