import React from 'react'

function VideoCard({videoData}) {
  return (
    <>
      <img src={videoData.snippet.thumbnails.default.url} alt="thumbnail" />
      <h3 role="VideoTitle">{videoData.snippet.title.replace(/(&quot;)/g,"\"").replace('&amp;','&')}</h3>
      <p role="ChannelName">{videoData.snippet.channelTitle}</p>
    </>
  )
}

export default VideoCard