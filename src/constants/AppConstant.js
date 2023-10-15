//ici on va construire 2 tablaux avec les données pour la navbar

import { apiRoot } from "./apiConstant";
import {AiOutlineHome, AiOutlineSearch, AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BiLibrary} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'


//1er: pour la gestion des albums
export const dataAlbumNav = [
    {title: "Accueil", path: "/", icon: AiOutlineHome},
    {title: "Rechercher", path: "/search", icon: AiOutlineSearch},
    {title: "Bibliothèque", path: "/library", icon: BiLibrary},
];

//2eme: pour les options utilisateurs
export const dataUserNav = [
    {title: "Créer une playlist", path: "/add-playlist", icon: AiOutlineAppstoreAdd},
    {title: "Titres likés", path: "/wishlist", icon: MdFavoriteBorder},
];
//on récupère le logo de spotify
export const imgLogo = `${apiRoot}/images/logo.png`;

export const styleIcon = { width: '25px', height: '25px' };
export const tableIcon = { width: '20px', height: '20px' };