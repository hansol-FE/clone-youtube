import React from 'react';
import styles from './video_detail.module.css';

const VideoDtail = ({video, video:{snippet}}) => {
  return (
    <section classNmae={styles.detail}>
      <iframe className={styles.video}
        title={video.id}
        type="text/html" 
        width="100%" 
        height="500"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0" 
        allowfullscreen>
      </iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDtail;