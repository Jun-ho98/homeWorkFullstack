import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'book',
  initialState: {
    voList: [],
    vo: {},
    loading: false,
    error: null,
  },
  reducers: {
    setVoList: (state, actions) => {
      state.voList = actions.payload;
    },
    setVo: (state, actions) => {
      state.vo = actions.payload;
    },
    setLoaidng: (state, actions) => {
      state.loading = actions.payload;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
    },
    reset: () => initialState,
  },
});

export const { setError, setLoaidng, setVo, setVoList, reset } = slice.actions;
export default slice.reducer;
