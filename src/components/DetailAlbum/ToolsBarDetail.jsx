import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveSong, setActiveAlbum } from '../../redux/player/playerSlice';
import PlayPause from '../PlayPause';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import InfoAlbum from './InfoAlbum';

const ToolsBarDetail = ({ dataAlbum }) => {
    //infos de l'album
    const data = dataAlbum;
    const songs = dataAlbum?.songs;//tableau de chansons
    //on déclare nos states
    const [index, setIndex] = useState(0);//index de la chanson en cours de lecture
    const [isInList, setIsInList] = useState(false);//si la chanson est dans la liste de favorie
    const [isCollapsed, setIsCollapsed] = useState(false);//si la liste de lecture est réduite
    //on récupère les données du slice
    const { isPlaying, activeSong } = useSelector(state => state.player);

    //méthode pour l'affichage de l'icone favoris
    const toggleFavorite = () => {
        setIsInList(!isInList);
        //TODO prevoir la requete pour le changer en BDD
    }

    //on récupère le hook dispatch pour lancer les actions
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

    //méthode pour ouvrir ou fermer le collapse
    const handleCollapseClick = () => {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <>
            <div className='flex items-center ml-5'>
                {/* boutton play */}
                <div className='tools-menu-detail cursor-pointer mr-3'>
                    <PlayPause
                        songs={songs}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        index={index}
                        data={data}
                    />
                </div>
                {/* boutton favori */}
                <div className='cursor-pointer' onClick={() => toggleFavorite()}>
                    {isInList ?
                        <AiFillHeart className='text-green m-3' style={{ fontSize: '30px' }} />
                        :
                        <AiOutlineHeart className='text-green m-3' style={{ fontSize: '30px' }} />
                    }
                </div>
                {/* boutton pour le collapse (pour biographie de l'artiste) */}
                <div className='cursor-pointer' onClick={handleCollapseClick} >
                    {isCollapsed ?
                        <AiFillInfoCircle className='text-green m-3' style={{ fontSize: '30px' }} />
                        :
                        <AiOutlineInfoCircle className='text-green m-3' style={{ fontSize: '30px' }} />
                    }
                </div>
            </div>
            {/* on récupère les infos du collapse */}
            <div>
                <Collapse isOpened={isCollapsed}>
                {/*  recupérer le composant pour le rendu */}
                <InfoAlbum dataAlbum={dataAlbum}/>
                </Collapse>
            </div>
        </>
    )
}

export default ToolsBarDetail