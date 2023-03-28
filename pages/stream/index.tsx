import React, { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import styles from './stream.module.css';

const Stream = () => {
  const embed = useRef();
  const handleReady = (e) => {
    embed.current = e;
  };

  return (
    <TwitchEmbed
      channel="chudlogic"
      autoplay={true}
      withChat={false}
      muted={false}
      darkMode={true}
      hideControls={false}
      onVideoReady={handleReady}
    />
  );
};

export default Stream;
