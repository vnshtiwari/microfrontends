import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProoductsProps {}

const StyledProoducts = styled.div`
  color: pink;
`;

export function Prooducts(props: ProoductsProps) {
  return (
    <StyledProoducts>
      <h1>Welcome to Prooducts!</h1>
    </StyledProoducts>
  );
}

export default Prooducts;
