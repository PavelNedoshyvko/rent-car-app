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
				state.error = null;
				state.adverts = action.payload;
				state.isLoading = false;
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