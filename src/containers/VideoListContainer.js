import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';

function VideoListContainer({ videoList }) {
  return (
    <div className='video-list' >
      {videoList && videoList.map((el, i) => {
        return (
          <div key={i}>
            <VideoCard videoData={el} />
          </div>
        )
      })}
    </div>
  )
}

export default VideoListContainer