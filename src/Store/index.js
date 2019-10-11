import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import playlistReducer from "../Reducers/playlist";
import trackReducer from "../Reducers/tracks"
import queenReducer from '../Reducers/queenAlbums'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  playlist: {
    albumSongs: []
  },
  allTracks: {
    tracks: []
  },
  allQueenAlbums: {
    queenAlbums: []
  }

};

const combReducer = combineReducers({ playlist: playlistReducer, allTracks: trackReducer, allQueenAlbums: queenReducer });

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
