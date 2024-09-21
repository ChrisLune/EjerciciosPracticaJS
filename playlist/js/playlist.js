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
    let playlists = [];
  
    const createPlaylist = (name) => {
        const newPlaylist = { name, songs: [] };
        playlists = [...playlists, newPlaylist];
    };
  
    const getAllPlaylists = () => {
        return playlists;
    };
  
    const removePlaylist = (name) => {
        playlists = playlists.filter(playlist => playlist.name !== name);
        
    };
  
    const addSongToPlaylist = (playlistName, song) => {
        const newSong = { ...song, favorite: false };
        playlists = playlists.map(playlist => {
            if (playlist.name === playlistName) {
                return { ...playlist, songs: [...playlist.songs, newSong] };
            }
            return playlist;
        });
    };
    
  
    const removeSongFromPlaylist = (playlistName, songTitle) => {
        playlists = playlists.map(playlist => {
            if (playlist.name === playlistName) {
                return { ...playlist, songs: playlist.songs.filter(song => song.title !== songTitle) };
            }
            return playlist;
        });
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