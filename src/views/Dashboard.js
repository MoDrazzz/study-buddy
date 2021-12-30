import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, useNavigate } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Wrapper, GroupLink, GroupButton } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
    if (!id) {
      navigate('/group/A');
    }
  }, [id, groups, navigate]);

  return (
    <Wrapper>
      <Title>
        Group: {id || groups[0]}
        {groups.map((group) => (
          <GroupLink key={group} to={`/group/${group}`}>
            <GroupButton>{group}</GroupButton>
          </GroupLink>
        ))}
      </Title>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
