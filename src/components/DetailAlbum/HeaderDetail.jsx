import React from 'react'
import { apiImage } from '../../constants/apiConstant';
import InfoHeader from './InfoHeader';
const HeaderDetail = ({dataAlbum}) => {
    //on crée une constante pour récupérer l'image de l'album
    const imgPath = `${apiImage}/${dataAlbum?.imagePath}`;
  return (
    <div className='bg-gradient-to-b from-green_top to-transparent p-5 w-full flex items-center'>
        <img src={imgPath} alt={dataAlbum?.title} className='w-48 h-48 m-1 rounded-full'/>
        <div className='ml-10 flex flex-col justify-end'>
            <h1 className='text-5xl font-bold text-white my-7'>{dataAlbum?.title}</h1>
            {/* ici la barre d'info */}
            <InfoHeader dataAlbum={dataAlbum}/>
        </div>
    </div>
  )
}

export default HeaderDetail