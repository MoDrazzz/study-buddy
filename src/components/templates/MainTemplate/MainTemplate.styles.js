import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding-left: 140px; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 140px 1fr 0.75fr;
  grid-template-rows: 90px 1fr;
  overflow-y: hidden;
`;
