import React from 'react'

function VideoCard({ videoData }) {
  return (
    <a
      className='video-link'
      target="_blank"
      href={`https://www.youtube.com/watch?v=${videoData.id.videoId}`}
    >
      <img
        src={videoData.snippet.thumbnails.default.url}
        alt="thumbnail"
      />
      <h3 role="VideoTitle">
        {videoData.snippet.title.replace(/(&quot;)/g, "\"").replace('&amp;', '&')}
      </h3>
      <p role="ChannelName">
        {videoData.snippet.channelTitle}
      </p>
    </a>
  )
}

export default VideoCard