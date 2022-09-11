import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';



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
  width: 18rem;
  font-size: 28px;
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
  font-size: 21px;
  padding-right: 1rem;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  color: ${Tokens.Colors.Quinary};
`