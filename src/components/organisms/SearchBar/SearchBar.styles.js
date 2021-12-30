import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const FilteredListItem = styled.li`
  padding: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 700;

  &:not(:last-child) {
    max-width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;
export const FilteredListWrapper = styled.ul`
  list-style: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 64px;
  left: 165px;
  margin: 0;
  padding: 6px 12px;
  width: 100%;
  max-width: 340px;
  max-height: 278px;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 25px;
  z-index: 1;
  box-shadow: 0 4px 10px rgba(115, 124, 142, 0.2);
  transition: opacity 0.2s ease-in-out;
`;

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
  position: relative;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 350px;
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }

  ${Input}:focus + ${FilteredListWrapper} {
    visibility: visible;
    opacity: 1;
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
