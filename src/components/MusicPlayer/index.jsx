import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, playPause, prevSong } from '../../redux/player/playerSlice';
import Track from './Track';
import Controls from './Controls';
import Seekbar from './Seekbar';
import Player from './Player';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
    //on récupère toutes les données du slice player
    const { activeSong, currentSongs, currentAlbum, currentIndex, isActive, isPlaying } = useSelector(state => state.player);
    //on définit tous les states du player
    const [duration, setDuration] = useState(0);//durée du titre
    const [seekTime, setSeekTime] = useState(0);//récupérer une position de la barre (si on déplace le curseur manuellement)
    const [appTime, setAppTime] = useState(0)//position réel de la lecture
    const [volume, setVolume] = useState(0.3)//pour gérer le volume
    const [repeat, setRepeat] = useState(false)//si on active la lecture en boucle
    const [shuffle, setShuffle] = useState(false)//si on active la lecture aléatoire
    const dispatch = useDispatch();

    useEffect(() => {
        //si le store contient un tableau de chanson on passe à true
        if (currentSongs.length) dispatch(playPause(true))

    }, [currentIndex])//si currentIndex change => on reload le composant

    //gestion de l'état play pause
    const handlePlayPause = () => {
        //si aucune chanson active on return
        if (!isActive) return;
        //si une chanson est active

        isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true))

        // if(isPlaying){
        //     //on met en pause
        //     dispatch(playPause(false))
        // }else{
        //     //on met en play
        //     dispatch(playPause(true))
        // }
    }

    //pour changer de musique en avant
    const handleNextSong = () => {
        //si on n'est pas en mode "aleatoire"
        if (!shuffle) {
            dispatch(nextSong((currentIndex + 1) % currentSongs.length));
        } else {
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length - 1)))
        }
    }

    //pour changer de musique en arrière
    const handlePrevSong = () => {
        //si on n'est pas en mode "aleatoire"
        if (currentIndex === 0) {
            //si l'index est a 0 on récupère le dernier index du tableau
            dispatch(prevSong(currentSongs.length - 1))
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length - 1)))
        } else {
            dispatch(prevSong(currentIndex - 1))
        }
    }

    return (
        <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
            <Track
                isPlaying={isPlaying}
                isActive={isActive}
                activeSong={activeSong}
                currentAlbum={currentAlbum}
            />
            <div className='flex-1 flex flex-col items-center justify-center'>
                <Controls 
                    isPlaying={isPlaying}//savoir si le titre est en cours de lecture
                    isActive={isActive}// savoir si on a une chanson active
                    repeat={repeat}//savoir si on est en mode repeat
                    setRepeat={setRepeat}//pour changer le mode repeat
                    shuffle={shuffle}//savoir si on est en mode shuffle
                    setShuffle={setShuffle}//pour changer le mode shuffle
                    currentSongs={currentSongs}//envoi du tableau de chanson
                    handlePlayPause={handlePlayPause}//pour changer l'état play/pause
                    handlePrevSong={handlePrevSong}//pour changer de musique en arrière
                    handleNextSong={handleNextSong}//pour changer de musique en avant
                />
                <Seekbar
                    value={appTime}//valeur de la barre de lecture
                    min="0"//valeur minimum de la barre de lecture
                    max={duration}//valeur maximum de la barre de lecture
                    onInput={(event)=> setSeekTime(event.target.value)}//pour récupérer la position de la barre de lecture
                    setSeekTime={setSeekTime}//pour changer la position de la barre de lecture
                    appTime={appTime}//pour récupérer la position réel de la lecture
                />
                <Player 
                    activeSong={activeSong}//pour récupérer la chanson active
                    volume={volume}//pour récupérer le volume
                    isPlaying={isPlaying}//savoir si le titre est en cours de lecture
                    seekTime={seekTime}//pour récupérer la position de la barre de lecture
                    repeat={repeat}//savoir si on est en mode repeat
                    currentIndex={currentIndex}//pour récupérer l'index de la chanson active
                    onEnded={handleNextSong}//pour changer de musique en avant
                    onTimeUpdate={(event)=> setAppTime(event.target.currentTime)}//pour récupérer la position réel de la lecture
                    onLoadedData={(event)=> setDuration(event.target.duration)}//pour récupérer la durée de la chanson
                />
            </div>
            <VolumeBar 
                value={volume}//pour récupérer le volume
                min="0"//valeur minimum de la barre de volume
                max="1"//valeur maximum de la barre de volume
                onChange={(event)=> setVolume(event.target.value)}//pour récupérer la position de la barre de volume
                setVolume={setVolume}//pour changer le volume
            />
        </div>
    )
}

export default MusicPlayer