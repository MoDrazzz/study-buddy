import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from 'components/organisms/UsersList/UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
