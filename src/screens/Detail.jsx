import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailAlbum from '../components/DetailAlbum';

const Detail = () => {
  //on appelle le hook de react-router-dom
  const location = useLocation();
  //on récupère les datas depuis le router
  const data = location?.state?.params;

  return (
    <DetailAlbum dataAlbum={data}/>//on passe les datas à index.jsx de AlbumDetail
  )
}

export default Detail