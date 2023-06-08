import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'https://restcountries.com/v3.1/all';

export const fetchStateInfo = createAsyncThunk(
  'country/fetchInfo',
  async () => {
    const response = await fetch(apiUrl);
    const result = await response.json();

    const countryData = result.map((country) => ({
      name: country.name.common,
      capital: country.capital,
      continent: country.continents[0],
      flag: country.flags.png,
      population: country.population,
      map: country.maps.googleMaps,
      area: country.area,
    }));

    return countryData;
  },
);

const initialState = {
  StateInfo: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStateInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStateInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.StateInfo = action.payload;
      })
      .addCase(fetchStateInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default countrySlice.reducer;
