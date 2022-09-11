import styled from 'styled-components';
import { Tokens } from '../../static/Tokens';



//* Styled FetchedHeroes
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
  background: ${Tokens.Colors.Secondary}
`;