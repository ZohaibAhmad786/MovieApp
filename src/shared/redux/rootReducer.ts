import { combineReducers } from "redux";
import { watchMoviesReducer } from "./watchReducer";

export default combineReducers({
    watchMovies:watchMoviesReducer.reducer
});
