import React from 'react'

function VideoCard({ videoData }) {
  return (
    <a
      className='video-card'
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.youtube.com/watch?v=${videoData.id.videoId}`}
    >
      <img
        src={videoData.snippet.thumbnails.default.url}
        alt="thumbnail"
        className='video-card__img'
      />
      <h3 role="VideoTitle" className='video-card__title'>
        {videoData.snippet.title.replace(/(&quot;)/g, "\"").replace('&amp;', '&')}
      </h3>
      <p role="ChannelName" className='video-card__channel'>
        {videoData.snippet.channelTitle}
      </p>
    </a>
  )
}

export default VideoCard