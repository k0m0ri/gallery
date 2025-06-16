import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  artist: string;
  category: string;
  createdAt: string;
  tags: string[];
}

interface ArtworkState {
  artworks: Artwork[];
  selectedArtwork: Artwork | null;
  loading: boolean;
  error: string | null;
  filters: {
    category: string;
    priceRange: [number, number];
    searchTerm: string;
  };
}

const initialState: ArtworkState = {
  artworks: [],
  selectedArtwork: null,
  loading: false,
  error: null,
  filters: {
    category: 'all',
    priceRange: [0, 100000],
    searchTerm: '',
  },
};

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setArtworks: (state, action: PayloadAction<Artwork[]>) => {
      state.artworks = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedArtwork: (state, action: PayloadAction<Artwork | null>) => {
      state.selectedArtwork = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateFilters: (state, action: PayloadAction<Partial<ArtworkState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setArtworks,
  setSelectedArtwork,
  setLoading,
  setError,
  updateFilters,
  clearFilters,
} = artworkSlice.actions;

export default artworkSlice.reducer;