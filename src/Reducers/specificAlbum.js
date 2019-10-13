export default function(state = {}, action) {
    switch (action.type) {
      case "SPECIFIC_ALBUM":
        return {
          ...state,
          album: state.album.concat(action.payload)
        };
      default:
        return state;
    }
  }