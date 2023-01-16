import React from 'react';

import { Close, Remove } from '@material-ui/icons';
import {
  Button,
  Container,
  ContainerTab,
  Content,
  MinimizeButton,
} from './top-bar.styles';

const TopBar = ({ children }: { children: React.ReactNode }) => {
  const closeWindow = () => {
    window.electron.ipcRenderer.sendMessage('close');
  };
  const minimizeWindow = () => {
    window.electron.ipcRenderer.sendMessage('minimize');
  };
  return (
    <Container>
      <ContainerTab>
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
