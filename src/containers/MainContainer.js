import React,{ useState, useEffect } from 'react';
import  axios from  'axios';
import SearchInput from '../components/SearchInput/SearchInput';
import TagBar from '../components/TagBar/TagBar';
import VideoListContainer from './VideoListContainer';

function MainContainer() {
  const [videoList, setVideoList] = useState();
  const [query, setQuery] = useState("")

  async function fetchVideos(searchInput) {
    if(searchInput){
      const res = await axios.get('http://localhost:5000/', {
        params: {
          q: searchInput
        }
      })
      setVideoList(res.data.items)
    } else {
      const res = await axios.get('http://localhost:5000/', {
        params: {
          chart: "mostPopular",
          regionCode: "CO"
        }
      })
      setVideoList(res.data.items)
    }
  }

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchVideos(event.target.value);
    }
  };

  useEffect(() =>{
    fetchVideos()
  },[])

  return (
    <>
      <SearchInput searchHandler={fetchVideos} query={query} setQuery={setQuery} keyDownHandler={keyDownHandler}/>
      <TagBar />
      <VideoListContainer videoList={videoList} />
    </>
  )
}

export default MainContainer
