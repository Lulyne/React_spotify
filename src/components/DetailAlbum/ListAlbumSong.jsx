import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/player/playerSlice';
import { BiTime } from 'react-icons/bi';
import { tableIcon } from '../../constants/AppConstant';
import PlayPause from '../PlayPause';

const ListAlbumSong = ({ dataAlbum }) => {
    const data = dataAlbum;//infos de l'album
    const songs = dataAlbum?.songs;//tableau de chansons
    //on déclare les states
    const [isHover, setIsHover] = useState(-1);//si la souris est sur la chanson
    //on récupère les infos du store
    const { isPlaying, activeSong } = useSelector(state => state.player);
    //on récupère le hook dispatch
    const dispatch = useDispatch();
    //méthode pour mettre en pause la chanson
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    //méthode pour mettre en lecture la chanson
    const handlePlayClick = (index) => {
        dispatch(setActiveSong({ songs, data, index }))
        dispatch(setActiveAlbum({ data }))
        dispatch(playPause(true))
    }

    return (
        <div className='flex flex-col'>
            <div className="overflow-x-auto min-w-full py-2 sm:px-6 lg:px-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope='col' className="px-6 py-4">#</th>
                                    <th scope='col' className="px-6 py-4">TITRE</th>
                                    <th scope='col' className="px-6 py-4">
                                        <BiTime style={tableIcon} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {songs ?
                                    songs.map((row, index) => {
                                        //formattage du temps pour les titres
                                        const minutes = Math.floor(row.duration / 60);
                                        const seconds = Math.floor(row.duration % 60);
                                        //on formatte le temps en mm:ss
                                        const duration = seconds < 10
                                            ? `${minutes}:0${seconds}`
                                            : `${minutes}:${seconds}`;

                                        return (
                                            <tr
                                                key={index}
                                                className='border-b transition duration-300 ease-in-out hover:bg-gradient-to-b from-green_top to-transparent'
                                                onMouseEnter={() => setIsHover(index)}
                                                onMouseLeave={() => setIsHover(-1)}
                                            >
                                                <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>
                                                    {/* on va utiliser isHover pour afficher le bouton play */}
                                                    {isHover !== index && `#${index + 1}`}
                                                    {isHover === index && <PlayPause
                                                        size='16px'
                                                        songs={songs}
                                                        handlePause={handlePauseClick}
                                                        handlePlay={() => handlePlayClick(index)}
                                                        isPlaying={isPlaying}
                                                        activeSong={activeSong}
                                                        index={index}
                                                    />}
                                                </td>
                                                <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>{row.title}</td>
                                                <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>{duration}</td>
                                            </tr>
                                        )

                                    })
                                    : "Aucune chanson disponible"}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAlbumSong