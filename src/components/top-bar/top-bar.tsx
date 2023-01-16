import React, { useContext } from 'react';

import { Close, Remove } from '@material-ui/icons';
import { Context } from 'context/Context';
import {
  Button,
  Container,
  ContainerTab,
  Content,
  MinimizeButton,
} from './top-bar.styles';
import UserInfo from './user-info/user-info';

const TopBar = ({ children }: { children: React.ReactNode }) => {
  const {
    context: { user },
  } = useContext(Context);

  const closeWindow = () => {
    window.electron.ipcRenderer.sendMessage('close');
  };
  const minimizeWindow = () => {
    window.electron.ipcRenderer.sendMessage('minimize');
  };
  return (
    <Container>
      <ContainerTab style={{ justifyContent: user ? 'space-between' : 'end' }}>
        {user && <UserInfo user={user} />}
        <div>
          <MinimizeButton type="button" onClick={minimizeWindow}>
            <Remove style={{ height: '22px' }} />
          </MinimizeButton>
          <Button type="button" onClick={closeWindow}>
            <Close style={{ height: '22px' }} />
          </Button>
        </div>
      </ContainerTab>
      <Content>{children}</Content>
    </Container>
  );
};

export default TopBar;
