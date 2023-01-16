import React from 'react';
import { ArrowDropDown } from '@material-ui/icons';
import { Container, UserPhoto } from './user-info.styles';

const UserInfo: React.FC<any> = ({ user }) => {
  return (
    <Container>
      <UserPhoto src={user.images[0].url} />
      <div>{user.display_name}</div>
      <ArrowDropDown style={{ height: '22px' }} />
    </Container>
  );
};

export default UserInfo;
