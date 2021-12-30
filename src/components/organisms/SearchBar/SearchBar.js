import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, FilteredListWrapper, FilteredListItem } from 'components/organisms/SearchBar/SearchBar.styles';

const SearchBar = () => {
  const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setFilteredUsers(students.filter(({ name }) => name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input name="searchBarInput" value={searchValue} onChange={handleSearch} />
      {searchValue && filteredUsers.length ? (
        <FilteredListWrapper>
          {filteredUsers.length > 0 ? filteredUsers.map((user) => <FilteredListItem key={user.id}> {user.name} </FilteredListItem>) : null}
        </FilteredListWrapper>
      ) : null}
    </SearchBarWrapper>
  );
};

export default SearchBar;
