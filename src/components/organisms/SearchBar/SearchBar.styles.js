import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightPurple};
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 350px;
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px 0;
  }
`;
