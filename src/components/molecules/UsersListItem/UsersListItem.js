import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, UserDataWrapper } from 'components/molecules/UsersListItem/UsersListItem.styles';

const UsersListItem = ({ index, userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <UserDataWrapper>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </UserDataWrapper>
    <Button onClick={() => alert(`This is student #${index + 1}`)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
