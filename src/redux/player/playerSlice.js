import { createSlice } from "@reduxjs/toolkit"

//initialisation des variables
const initialState = {
    currentSongs: [],
    currentAlbum: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
}
//création du slice pour la gestion du player
const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        //tout ce qu'on stock lorsqu'on active une chanson
        setActiveSong: (state, action) => {
            //stockage de la chanson en lecture
            state.activeSong = action.payload.songs[action.payload.index];
            //stockage du tableau de chansons
            state.currentSongs = action.payload?.data?.songs;
            //stockage de l'index
            state.currentIndex = action.payload.index;
            //stockage de l'état
            state.isActive = true;
        },
        setActiveAlbum: (state, action) => {
            //stockage des infos de l'album
            state.currentAlbum = action.payload?.data;
        },
        //permet d'avancer la liste de lecture
        nextSong: (state, action) => {
            //on récupère la chanson dans le tableau à l'index donné
            state.activeSong = state.currentSongs[action.payload];
            //on stocke l'index
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        //permet de reculer la liste de lecture
        prevSong: (state, action) => {
            //on récupère la chanson dans le tableau à l'index donné
            state.activeSong = state.currentSongs[action.payload];
            //on stocke l'index
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        playPause: (state, action) => {
            //on stocke l'état de la lecture
            state.isPlaying = action.payload;
        },
    }
})

//export des actions
export const { setActiveSong, setActiveAlbum, nextSong, prevSong, playPause } = playerSlice.actions;
//export du reducer
export default playerSlice.reducer;