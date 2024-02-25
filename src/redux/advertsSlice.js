import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { allAdvertsThunk } from "./advertsOperation";

const INITIAL_STATE = {
	adverts: [],
	isLoading: false,
	error: null,
};

const advertsSlice = createSlice({
	name: "adverts",
	initialState: INITIAL_STATE,
	extraReducers: builder =>
		builder
			.addCase(allAdvertsThunk.fulfilled, (state, action) => {
				const uniqueAdverts = action.payload.filter(
					newAdvert => !state.adverts.some(existingAdvert => existingAdvert.id === newAdvert.id));
				state.adverts.push(...uniqueAdverts);
				state.isLoading = false;
				state.error = null;
			})
			.addMatcher(
				isAnyOf(
					allAdvertsThunk.pending
				),
				state => {
					state.isLoading = true;
					state.error = null;
				},
			)
			.addMatcher(
				isAnyOf(
					allAdvertsThunk.rejected
				),
				(state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				},
			),
});

export const advertsReducer = advertsSlice.reducer;