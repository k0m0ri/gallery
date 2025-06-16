// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import artworkSlice from './slices/artworkSlice';

export const store = configureStore({
  reducer: {
    artwork: artworkSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;