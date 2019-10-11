export default function(state = {}, action) {
    switch (action.type) {
      case "TRACKS":
        return {
          ...state,
            tracks: state.tracks.concat(action.payload)
        };
      default:
        return state;
    }
  }