import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from '../components/Searchbar'
import SearchView from '../components/SearchView'
import { selectAlbumData } from '../redux/album/albumSelector'
import Loader from '../components/Loader'
import { fetchResetSearch } from '../redux/album/albumSlice'

const Search = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(selectAlbumData)

  useEffect(() => {
    
  
    return () => {
      dispatch(fetchResetSearch())
    }
  }, [])
  

  return (

    loading ? <Loader /> :
      <>
        <Searchbar />
        <SearchView />
      </>

  )
}

export default Search