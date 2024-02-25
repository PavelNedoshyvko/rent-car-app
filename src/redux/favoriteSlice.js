import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: [],
	reducers: {
		toggleFavorite(state, action) {
			const index = state.findIndex(item => item.id === action.payload.id);
			if (index === -1) {
				state.push(action.payload);
			} else {
				state.splice(index, 1);
			}
		},
	},
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;