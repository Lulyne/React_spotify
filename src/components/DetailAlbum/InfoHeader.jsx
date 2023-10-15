import React from 'react'
import { apiImage } from '../../constants/apiConstant';
const InfoHeader = ({ dataAlbum }) => {

    const imgPath = `${apiImage}/${dataAlbum?.imagePath}`;
    //on format la date de sortie
    const releaseDate = new Date(dataAlbum?.releaseDate).getFullYear();

    //ici on utilise une double ternaire pour le nombre de titre
    const nbTitle = dataAlbum.songs ? dataAlbum.songs.length > 1
        ? dataAlbum.songs.length + ' titres'
        : dataAlbum.songs.length + ' titre'
        : 'Aucun titre pour cet album'

    const Dot = () => {
        return (
            <p>&#8226;</p>
        )
    }

    //traitement pour durée total de l'album
    const durationAlbum = () => {
        const totalSeconds = dataAlbum.songs.map(function (num) {
            return num.duration
        }).reduce(function (a, b) {
            return a + b;
        });
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return hours > 0 ? (hours + " h " + minutes + " min " + seconds + " s")
            : (minutes + " min " + seconds + " s")
    }

    return (
        <div className='flex items-center'>
            <img className='w-5 h-5 rounded-full' src={imgPath} alt={dataAlbum.title} />
            <p className='font-bold text-base p-1'>{dataAlbum.artist.name}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{releaseDate}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{nbTitle}</p>
            <Dot />
            <p className='font-bold text-base p-1'>{durationAlbum()}</p>
        </div>
    )
}

export default InfoHeader