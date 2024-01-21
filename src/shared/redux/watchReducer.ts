import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWatchMovie } from './../types/index';

interface State {
  movies: IWatchMovie[];
}

const initialState: State = {
  movies: [],
};

export const watchMoviesReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMoviesList: (state: State, action: PayloadAction<IWatchMovie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const {setMoviesList} = watchMoviesReducer.actions;

export default watchMoviesReducer.reducer;
