import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = ({ users, deleteUser }) => (
  <ViewWrapper>
    <UsersList users={users} deleteUser={deleteUser} />
  </ViewWrapper>
);

export default Dashboard;
