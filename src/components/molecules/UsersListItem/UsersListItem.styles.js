import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  position: relative;
  padding: 25px 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) => (average > 4 ? theme.colors.success : average > 2 ? theme.colors.warning : theme.colors.error)};
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 20px;

  p:first-child {
    margin: 0;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:last-child {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
