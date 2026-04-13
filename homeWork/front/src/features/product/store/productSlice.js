import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  voList: [],
  vo: {},
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setVoList: (state, actions) => {
      state.voList = actions.payload;
    },
    setVo: (state, actions) => {
      state.vo = actions.payload;
    },
    setLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
    },
    reset: () => initialState,
  },
});

export const { setError, setLoading, setVo, setVoList, reset } = slice.actions;
export default slice.reducer;
