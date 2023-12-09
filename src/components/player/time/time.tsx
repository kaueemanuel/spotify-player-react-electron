/* eslint-disable camelcase */
import React, { useEffect, useMemo, useState } from 'react';
import { getTime } from 'utils/util';
import TimeBar from './time-bar/time-bar';
import { Container, Text } from './time.styles';

const Time: React.FC<{ playbackState: any }> = ({
  playbackState,
}: {
  playbackState: any;
}) => {
  const [actualTimePorcentage, setActualTimePorcentage] = useState(0);

  const progress_ms = useMemo(
    () => getTime(playbackState?.progress_ms),
    [playbackState?.progress_ms]
  );
  const duration_ms = useMemo(
    () => getTime(playbackState?.item?.duration_ms),
    [playbackState?.item?.duration_ms]
  );

  useEffect(() => {
    if (playbackState) {
      setActualTimePorcentage(
        playbackState?.item?.duration_ms && playbackState?.progress_ms
          ? (playbackState.progress_ms / playbackState.item.duration_ms) * 100
          : 0
      );
    }
  }, [playbackState]);

  return (
    <Container>
      <Text>{progress_ms}</Text>
      <TimeBar defaultValue={actualTimePorcentage} />
      <Text>{duration_ms}</Text>
    </Container>
  );
};

export default Time;
