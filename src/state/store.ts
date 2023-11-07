import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = combineReducers({
  app: reducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// export const store = configureStore({
//   reducer: {
//     app: reducer,
//   },
// });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
