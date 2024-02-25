import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllAdverts } from "../servises/api/advert";

export const allAdvertsThunk = createAsyncThunk(
	"adverts/allAdverts",
	async (page, thunkAPI) => {
		try {
			const adverts = await fetchAllAdverts(page);
			return adverts;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)