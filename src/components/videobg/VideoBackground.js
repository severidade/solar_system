import React from 'react';
import ReactPlayer from 'react-player';

import styles from './VideoBackground.module.css';

const VideoBackground = () => (
  <div className={ styles.video_background_container }>
    <ReactPlayer
      className={ styles.video_background }
      // url="https://www.youtube.com/watch?v=ztVV54sPOns&t=46m36s"
      // url="https://www.youtube.com/watch?v=ztVV54sPOns&t=6m32s"
      url="https://www.youtube.com/watch?v=ztVV54sPOns&t=10m9s"
      playing
      loop
      muted
      controls={ false }
      speed="2"
      width="300%"
      height="110%"
    />
  </div>
);

export default VideoBackground;
