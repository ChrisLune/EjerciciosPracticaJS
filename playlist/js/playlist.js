/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */

/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */

const createPlaylistManager = () => {
    const playlists = [];
  
    const createPlaylist = (name) => {
        const newPlaylist = { name, songs: [] };
        playlists.push(newPlaylist);
    };
  
    const getAllPlaylists = () => {
        return playlists;
    };
  
    const removePlaylist = (name) => {
        playlists.findIndex(playlist => playlist.name !== name)
        
    };
  
    const addSongToPlaylist = (playlistName, song) => {
        const playlist = playlists.find(track => track.name === playlistName);
        if (!playlist) {
            console.error(`La lista de reproducción "${playlistName}" no fue encontrada.`);
            return;
        }
        const newSong = { ...song, favorite: false };
        playlist.songs.push(newSong);
        console.log(`La canción "${song.title}" ha sido agregada a la lista de reproducción "${playlistName}".`);
    };
    
  
    const removeSongFromPlaylist = (playlistName, songTitle) => {
        const playlist = playlists.find(track => track.name === playlistName);
        if (playlist) {
            playlist.songs = playlist.songs.filter(song => song.title !== songTitle);
            console.log(`La canción "${songTitle}" ha sido eliminada de la lista de reproducción "${playlistName}".`);
        } else {
            console.error(`La lista de reproducción "${playlistName}" no fue encontrada.`);
        }
    };
    
  
    return {
        createPlaylist,
        getAllPlaylists,
        removePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist
    };
  };
  
  export default createPlaylistManager;