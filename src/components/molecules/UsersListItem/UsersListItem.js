import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, UserDataWrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserShape } from 'types/UserShape';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <UserDataWrapper>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </UserDataWrapper>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
