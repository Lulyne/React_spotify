import React from 'react'
import { apiRoot } from '../constants/apiConstant';
import { Link } from 'react-router-dom';

const ArtistView = ({ dataArtist }) => {

    console.log(dataArtist);
    return (
        //rendu de la vue artiste sous forme de carte avec nom et biographie
        <Link to="/artist-detail" state={{params : dataArtist}}>
            <div className='flex flex-col justify-center items-center bg-black rounded-lg shadow-lg p-4'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='rounded-full w-40 h-40' src={`${apiRoot}/images/user.png`} alt='artist' />
                    <h3 className='font-bold text-xl text-white text-center mt-2'>{dataArtist.name}</h3>
                </div>
                <p className='text-center text-white mt-2'>{dataArtist.biography}</p>
            </div>
        </Link>
    )
}

export default ArtistView