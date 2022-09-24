import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Tokens } from '../../static/Tokens';



//* Styled CenteredDiv
export const CenteredDivStyled = styled.div`
  width: 100%;
  height: calc(100vh - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
`;


//* Styled Loader
export const LoaderStyled = styled.div`
  margin: 5rem auto;
  font-size: 1rem;
  position: relative;
  text-indent: -9999rem;
  border-top: .5rem solid rgba(255, 255, 255, 0.2);
  border-right: .5rem solid rgba(255, 255, 255, 0.2);
  border-bottom: .5rem solid rgba(255, 255, 255, 0.2);
  border-left: .5rem solid ${Tokens.Colors.Teritary};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
&:after {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;


//* Styled SearchIcon
export const SearchIcon = styled(AiOutlineSearch)`
  color: ${Tokens.Colors.Primary};
  font-size: 28px;
  padding-right: 1rem;
`;


//* Styled CloseIcon
export const CloseIcon = styled(AiOutlineClose)`
  color: ${Tokens.Colors.Primary};
  font-size: 24px;
  padding-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;


//* Styled Div
export const DivStyled = styled.div`
  --grid-layout-gap: .25rem;
  --grid-column-count: 5;
  --grid-item--min-width: 18rem;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: 18rem;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
  grid-gap: var(--total-gap-width);
  background: ${Tokens.Colors.Secondary};
  width: 90vw;
  position: relative;
  right: -5vw;
  margin-bottom: 3rem;
`;


//* Styled Section
export const SectionStyled = styled.section`
  width: 85vw;
  position: relative;
  right: -7.5vw;
  margin: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 812px) {
    flex-direction: column-reverse;
  }
`;


//* Styled Select
export const SelectStyled = styled.select`
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  margin: 0;
  width: 16rem;
  font-size: 24px;
  color: ${Tokens.Colors.Quinary};
  cursor: pointer;
  outline: none;
`;


//* Styled Option
export const OptionStyled = styled.option`
  // Only affects Chrome
  outline: none;
  background: ${Tokens.Colors.Secondary};
`;

//* Styled Span
export const SpanStyled = styled.span`
  font-size: ${Tokens.Typography.Span.FontSize};
  padding-right: 1rem;
  font-weight: ${Tokens.Typography.Span.FontWeight};
  font-style: italic;
  text-transform: uppercase;
  color: ${Tokens.Colors.Quinary};
`