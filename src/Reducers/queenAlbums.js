export default function(state = {}, action) {
    switch (action.type) {
      case "QUEEN_ALBUMS":
        return {
          ...state,
          queenAlbums: state.queenAlbums.concat(action.payload)
        };
      default:
        return state;
    }
  }