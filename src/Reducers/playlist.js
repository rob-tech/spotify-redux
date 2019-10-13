export default function(state = {}, action) {
    switch (action.type) {
      case "ADD_ITEM_TO_PLAYLIST":
        console.log(action.payload)
        console.log(state.albumSongs)
        return {
          ...state,
          albumSongs: state.albumSongs.concat(action.payload)
          
        };
      case "REMOVE_ITEM_FROM_PLAYLIST":
        const albumSongsRemove = state.albumSongsRemove.findIndex(
          trackId => trackId === action.payload
        );
        return {
          ...state,
          playlist: [
            ...state.albumSongs.slice(0, albumSongsRemove),
            ...state.albumSongs.slice(albumSongsRemove + 1)
          ]
        };
      default:
        return state;
    }
  }
  