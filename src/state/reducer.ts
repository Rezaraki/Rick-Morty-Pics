import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import getRickMortyPics from './actions/getRickMortyPics';
import { IImageName } from 'types';

export interface CounterState {
  value: number;
  pics: {
    status: 'loading' | 'succeeded' | 'failed' | null;
    images: IImageName[];
  };
}

const initialState: CounterState = {
  value: 0,
  pics: {
    status: null,
    images: [],
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRickMortyPics.pending, (state) => {
        state.pics.status = 'loading';
      })
      .addCase(getRickMortyPics.fulfilled, (state, action) => {
        state.pics.status = 'succeeded';
        state.pics.images = state.pics.images.concat(action.payload);
      })
      .addCase(getRickMortyPics.rejected, (state, action) => {
        state.pics.status = 'failed';
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
