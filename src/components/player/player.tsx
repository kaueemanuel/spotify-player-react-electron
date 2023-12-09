import React, { useContext, useEffect, useState } from 'react';

import { getPlaybackState } from 'api/Spotify';
import useServices from 'hooks/use-services';

import { Context } from 'context/Context';
import { Container, MusicArtist, MusicTitle } from './player.styles';
import Time from './time/time';
import Controls from './time/controls/controls';

const Player: React.FC = () => {
  const {
    context: { playbackState, credentials },
    setContext,
  } = useContext(Context);
  const [{ value }, getData] = useServices(getPlaybackState);
  const [player, setPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  // const [current_track, setTrack] = useState(playbackState.track);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(credentials.access_token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
    };
  }, [credentials.access_token]);

  useEffect(() => {
    let intervalGetPlaybackState = setInterval(() => {}, 0);

    if (getData) {
      intervalGetPlaybackState = setInterval(() => {
        getData();
      }, 1000);
    }

    return () => clearInterval(intervalGetPlaybackState);
  }, [getData]);

  useEffect(() => {
    if (value) {
      setContext((o) => ({ ...o, playbackState: value }));
    }
  }, [setContext, value]);

  let artists = '';
  playbackState?.item?.artists?.forEach(
    (artist: { name: string }, i: number) => {
      if (i === 0) {
        artists = artist?.name;
      } else {
        artists += `, ${artist.name}`;
      }
    }
  );

  return (
    <Container>
      <div>
        <MusicTitle>{playbackState?.item?.name}</MusicTitle>
        <MusicArtist>{artists}</MusicArtist>
      </div>
      <Time playbackState={playbackState} />
      <Controls />
    </Container>
  );
};

export default Player;
