import React from 'react'
import HeaderDetail from './HeaderDetail';
import ToolsBarDetail from './ToolsBarDetail';
import ListAlbumSong from './ListAlbumSong';

const DetailAlbum = (props) => {
    const {dataAlbum} = props;

  return (
    <>
        <HeaderDetail dataAlbum={dataAlbum}/>
        <ToolsBarDetail dataAlbum={dataAlbum}/>
        <ListAlbumSong dataAlbum={dataAlbum}/>
    </>
  )
}

export default DetailAlbum