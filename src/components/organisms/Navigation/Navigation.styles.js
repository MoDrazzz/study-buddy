import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: absolute;
  left: 0;
  height: 100%;
  width: 140px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.colors.lightPurple};
`;

export const Logo = styled.p`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 70px;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 15px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  padding-right: 25px;
  margin: 10px 0;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 7px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    width: 20px;
    height: 3px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &.active::after {
    opacity: 1;
  }
`;
