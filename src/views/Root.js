import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersList from 'components/organisms/UsersList/UsersList';
import Form from 'components/organisms/Form/Form';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from 'views/Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [formValues, setformValues] = useState(initialFormState);
  const [users, setUsers] = useState(usersData);

  const handleInputChange = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setformValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="add-user">Add user</Link>
          </nav>
          <Routes>
            <Route path="/" exact element={<UsersList users={users} deleteUser={deleteUser} />} />
            <Route path="/add-user" element={<Form handleAddUser={handleAddUser} formValues={formValues} handleInputChange={handleInputChange} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
