import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import { Fluid } from 'components/atoms/Fluid/Fluid';

const UsersList = () => (
  <Fluid>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </StyledList>
  </Fluid>
);

export default UsersList;
