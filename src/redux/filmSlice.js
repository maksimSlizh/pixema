import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestFilms } from '../services/films'

const fetchFilms = createAsyncThunk('films/fetchFilms', async ({t = 'Avatar'}) => {
  const { data } = await requestFilms(t)
  return data
})

export const filmSlice = createSlice({
  name: 'films',
  initialState: {
    films: [],
    loading: false,
    error: null,
    t: 'Avatar',
  }
  ,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilms.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.loading = false
      state.films = action.payload
    })
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export { fetchFilms}
export const filmsReducer = filmSlice.reducer
