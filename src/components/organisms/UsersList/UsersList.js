import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from 'components/organisms/UsersList/UsersList.styles';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
