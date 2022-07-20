import React from 'react';
import styles from './video_detail.module.css';

const VideoDtail = ({video}) => {
  return (
    <h1>{video.snippet.title}</h1>
  );
};

export default VideoDtail;