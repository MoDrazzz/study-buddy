import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      Study
      <br />
      Buddy
    </Logo>
    <StyledLink to="group">Dashboard</StyledLink>
    {/* <StyledLink to="add-user">Add user</StyledLink> */}
  </Wrapper>
);

export default Navigation;
