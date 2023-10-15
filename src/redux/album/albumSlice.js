import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../constants/apiConstant";

const slice = createSlice({
    //on lui donne un nom
    name: 'albums',
    //on doit initialiser les valeurs par default
    initialState: {
        loading: false,
        albums: [],
        searchAlbum: [],
        searchTitle: [],
        searchArtist: [],
        
    },
    //reducers: permet de remplir les valeurs des states
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
        setSearchAlbum: (state, action) => {
            state.searchAlbum = action.payload;
        },
        setSearchTitle: (state, action) => {
            state.searchTitle = action.payload;
        },
        setSearchArtist: (state, action) => {
            state.searchArtist = action.payload;
        },
        

        
    }
})

//on exporte les actions sous forme de constantes
export const { setLoading, setAlbums, setSearchAlbum, setSearchTitle, setSearchArtist } = slice.actions;
//on va créer la méthode qui permet de récupérer les infos en BDD
export const fetchAlbums = () => async dispatch => {
    try {
        //on passe le loading à true
        dispatch(setLoading(true));
        //on va récupérer les infos en BDD
        const response = await axios.get(`${api}/albums?isActive=true`);
        //on doit "set" les valeurs dans le state
        dispatch(setAlbums(response.data));
        //on passe le loading à false
        dispatch(setLoading(false));
    } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
    }
}

//méthode qui permet de récupérer les infos suite à une recherche
export const fetchSearch = (search) => async dispatch => {
    try {
        //on passe setLoading à true
        dispatch(setLoading(true));
        //on va récupérer les infos en BDD
        const responseAlbums = await axios.get(`${api}/albums?isActive=true&title=${search}`);
        const responseArtists = await axios.get(`${api}/artists?albums.isActive=true&name=${search}`);
        const responseTitles = await axios.get(`${api}/albums?isActive=true&songs.title=${search}`);
        //on doit "set" les valeurs dans le state
        dispatch(setSearchAlbum(responseAlbums.data));
        dispatch(setSearchArtist(responseArtists.data));
        dispatch(setSearchTitle(responseTitles.data));
        //on passe setLoading à false
        dispatch(setLoading(false));

    } catch (error) {
        console.log(error);
        dispatch(setLoading(false));
    }
}

export const fetchResetSearch = () => async dispatch => {
    dispatch(setSearchAlbum([]));
    dispatch(setSearchArtist([]));
    dispatch(setSearchTitle([]));
}


export default slice.reducer;