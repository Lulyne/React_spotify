import { createSelector } from "@reduxjs/toolkit";

//on récupère les données du slice qu'on stock dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;
const selectSearchAlbum = state => state.albums.searchAlbum;
const selectSearchTitle = state => state.albums.searchTitle;
const selectSearchArtist = state => state.albums.searchArtist;


//on crée le selector
export const selectAlbumData = createSelector(
    [selectAlbums, selectLoading, selectSearchAlbum, selectSearchArtist, selectSearchTitle],
    //on effectue une destructuration des données
    (albums, loading, searchAlbum, searchArtist, searchTitle) => (
        { albums, loading, searchAlbum, searchArtist, searchTitle }
    )
)