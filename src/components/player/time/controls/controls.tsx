import { setPausePlayback } from 'api/Spotify';
import { Context } from 'context/Context';
import useServices from 'hooks/use-services';
import React, { useContext } from 'react';
import {
  Pause,
  VolumeUp,
  Shuffle,
  Search,
  Repeat,
  FastForward,
  FastRewind,
} from '@material-ui/icons';

import { Container, ContainerControls } from './controls.styles';

const Controls: React.FC = () => {
  const {
    context: { playbackState },
  } = useContext(Context);

  const [, setPause] = useServices(setPausePlayback);

  return (
    <Container>
      <ContainerControls>
        <VolumeUp style={{ fontSize: '26px' }} type="button" />
      </ContainerControls>
      <ContainerControls>
        <Shuffle style={{ fontSize: '20px' }} type="button" />
        <FastRewind style={{ fontSize: '26px' }} type="button" />
        <Pause
          style={{ fontSize: '30px' }}
          type="button"
          onClick={() => setPause({ device_id: playbackState?.device?.id })}
        />
        <FastForward style={{ fontSize: '26px' }} type="button" />
        <Repeat style={{ fontSize: '20px' }} type="button" />
      </ContainerControls>
      <ContainerControls>
        {/* <List style={{ fontSize: '30px' }} type="button" /> */}
        <Search style={{ fontSize: '26px' }} type="button" />
      </ContainerControls>
    </Container>
  );
};

export default Controls;
