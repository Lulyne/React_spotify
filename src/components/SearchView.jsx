import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlbumData } from '../redux/album/albumSelector'
import AlbumCard from './AlbumCard'
import Loader from './Loader'
import ArtistView from './ArtistView'

const SearchView = () => {

    const { searchTitle, searchArtist, searchAlbum } = useSelector(selectAlbumData)
    const { activeSong, isPlaying } = useSelector(state => state.player)
    //on récupère les data de notre selector
    const dataAlbum = searchAlbum['hydra:member'];
    const dataArtist = searchArtist['hydra:member'];
    const dataTitle = searchTitle['hydra:member'];
    console.log(dataArtist)
    return (
        <>
            {/* si on est en chargement on retourne "Loader" sinon on retourne les albums trouvé s'il y en a, avec en titre "résultat des albums" */}
            {dataAlbum && dataAlbum.length > 0 ?
                <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des albums
                </h2> : null}
            {/* on map sur le tableau dataAlbum */}
            <div className='flex flex-wrap'>
                {dataAlbum && dataAlbum.map((data, index) => {
                    return (
                        //on appelle AlbumCard en lui passant les props
                        <div className='p-3 m-3'>
                            <AlbumCard
                                key={`album${index}`}
                                data={data}
                                songs={data.songs}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                index={0}
                            />

                        </div>
                    )
                })}

            </div>
            {/* si on est en chargement on retourne "Loader" sinon on retourne les artistes trouvé sous forme de tableau s'il y en a, avec en titre "résultat des artistes" */}
            {dataArtist && dataArtist.length > 0 ?
                <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des artistes
                </h2> : null}
            {/* on map sur le tableau dataArtist */}
            <div className='flex flex-wrap'>
                {dataArtist && dataArtist.map((data, index) => {
                    return (
                        //on appelle AlbumCard en lui passant les props
                        <div className='p-3 m-3'>
                            <ArtistView
                                key={`artist${index}`}
                                dataArtist={data}
                            />

                        </div>
                    )
                })}
            </div>
            {/* si on est en chargement on retourne "Loader" sinon on retourne les titres trouvé sous forme de tableau s'il y en a, avec en titre "résultat des titres" */}
            {dataTitle && dataTitle.length > 0 ?
                <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des titres
                </h2> : null}
            {/* on map sur le tableau dataTitle */}
            <div className='flex flex-wrap'>
                {dataTitle && dataTitle.map((data, index) => {
                    return (
                        //on appelle AlbumCard en lui passant les props
                        <div className='p-3 m-3'>
                            <AlbumCard
                                key={`title${index}`}
                                data={data}
                                songs={data.songs}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                index={0}
                            />

                        </div>
                    )
                })}
            </div>
            {/* si aucun résultat on retourne "Aucun Résultat trouvé" */}
            {dataAlbum && dataAlbum.length === 0 && dataArtist && dataArtist.length === 0 && dataTitle && dataTitle.length === 0 ?
                <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun Résultat trouvé
                </h2> : null}

        </>
    )
}

export default SearchView