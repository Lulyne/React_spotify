import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbumData } from '../redux/album/albumSelector';
import { fetchAlbums } from '../redux/album/albumSlice';
import Loader from '../components/Loader';
import AlbumCard from '../components/AlbumCard';

const Home = () => {

  //on récupère le hook de react-redux
  const dispatch = useDispatch();
  //on récupère les infos du slice de player
  //pour savoir si une chanson est en cours de lecture et si le player est actif
  const {activeSong, isPlaying} = useSelector(state => state.player);

  //on appelle le hook useEffect, son role est essentiel 
  //car il gère 3 états : le chargement, la mise à jour et le démontage
  useEffect(() => {
    //mécanique lors du montage
    //c'est ici qu'on va appeller notre reducer
    //pour récupérer les données lors du montage
    dispatch(fetchAlbums());
    //si j'ai besoin de faire quelque chose lors du démontage du composant
    
  }, [dispatch]);//dans l'update on appelle dispatch pour mettre a jour les données de l'album

//on récupère notre selector
const {albums, loading} = useSelector(selectAlbumData);
const dataAlbum = albums['hydra:member'];

  return (
    loading ? <Loader /> :
    <div className="flex flex-col">
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Tous les albums
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {/* on va mapper sur notre tableau albums */}
      {dataAlbum && dataAlbum.map((data, index) => {
        return (
          //on appelle AlbumCard en lui passant les props
          <AlbumCard 
            key={index} 
            //data: infos sur tous les albums
            data={data} 
            //songs: le tableau de chansons
            songs= {data.songs}
            //isPlaying: pour savoir si une chanson est en cours de lecture
            isPlaying={isPlaying}
            //activeSong: la chanson en cours de lecture
            activeSong={activeSong}
            //index: l'index de la chanson en cours de lecture
            index={0}
          />
        )
      })}
      </div>
    </div>
  )
  
}

export default Home