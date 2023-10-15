import React from 'react'
import { useLocation } from 'react-router-dom'

const ArtistDetail = () => {
const location = useLocation()
const dataArtist = location.state.params
console.log(dataArtist)

  return (
    <div>ArtistDetail</div>
  )
}

export default ArtistDetail