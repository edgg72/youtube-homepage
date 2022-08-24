import React from 'react'
import SearchInput from '../components/SearchInput/SearchInput'
import TagBar from '../components/TagBar/TagBar'
import VideoListContainer from './VideoListContainer'

function MainContainer() {
  return (
    <>
      <SearchInput />
      <TagBar />
      <VideoListContainer />
    </>
  )
}

export default MainContainer
