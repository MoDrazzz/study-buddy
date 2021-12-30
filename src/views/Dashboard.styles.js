import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 2 / 2;
  width: 100%;
  max-width: 450px;
`;

export const GroupLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  margin-left: 20px;
`;

export const GroupButton = styled(Button)`
  padding: 0;
  margin: 0;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
