import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, UserDataWrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';
import { UserShape } from 'types/UserShape';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage average={average}>{average}</StyledAverage>
      <UserDataWrapper>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </UserDataWrapper>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
