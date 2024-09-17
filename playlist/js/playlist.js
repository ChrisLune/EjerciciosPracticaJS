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
        /*
        const index = playlists.findIndex(playlist => playlist.name === name);
        if (index !== -1) {
            playlists.splice(index, 1);
        }
            */
    };
  
    const addSongToPlaylist = (playlistName, song) => {
        const playlist = playlists.find(track => track.name === playlistName);
        if (playlist) {
            const newSong = { ...song, favorite: false };
            playlist.songs.push(newSong);
        }
    };
  
    const removeSongFromPlaylist = (playlistName, songTitle) => {
        const playlist = playlists.find(track => track.name === playlistName);
        if (playlist) {
            const index = playlist.songs.findIndex(song => song.title === songTitle);
            if (index !== -1) {
                playlist.songs.splice(index, 1);
            }
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