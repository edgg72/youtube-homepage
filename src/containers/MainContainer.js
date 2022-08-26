import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from '../components/SearchInput/SearchInput';
import TagBar from './TagBar/TagBar';
import VideoListContainer from './VideoListContainer';
import '../css/styles.css'
import Spinner from '../components/Spinner/Spinner';

function MainContainer() {
  const [videoList, setVideoList] = useState();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchVideos(searchInput) {
    setIsLoading(true);
    if (searchInput) {
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
    setIsLoading(false);
  }

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fetchVideos(event.target.value);
    }
  };

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <main className='main' >
      <SearchInput
        searchHandler={fetchVideos}
        query={query}
        setQuery={setQuery}
        keyDownHandler={keyDownHandler}
      />
      <TagBar onClickTag={fetchVideos} />
      {isLoading ? (
        <div className='main__spinner-container'><Spinner /></div>
      ) : (
        <VideoListContainer videoList={videoList} />
      )}
    </main>
  )
}

export default MainContainer
