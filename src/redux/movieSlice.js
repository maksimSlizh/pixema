import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMovie } from '../services/movie'

const fetchMovies = createAsyncThunk('movie/fetchMovie', async () => {
  const { data } = await requestMovie()
  return data
})

export const filmMovie = createSlice({
  name: 'movie',
  initialState: {
    data: [],
    loading: false,
    error: null,
    t: '',
  }
  ,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export { fetchMovies }
export const movieReducer = filmMovie.reducer
