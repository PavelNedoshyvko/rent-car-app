import { createSelector } from "@reduxjs/toolkit";

export const selectAllAdverts = state => state.adverts.adverts;

export const selectFilter = state => state.filter;

export const selectFavorite = state => state.favorites;

export const selectIsLoading = state => state.adverts.isLoading;


export const selectVisibleAdverts = createSelector(
	[selectAllAdverts, selectFilter],
	(adverts, filter) => {
		const { brand, price, mileageFrom, mileageTo } = filter;

		return adverts.filter(advert => {
			if (brand && advert.make.toLowerCase() !== brand.toLowerCase()) {
				return false;
			}
			if (price && parseFloat(advert.rentalPrice.slice(1)) !== parseFloat(price)) {
				return false;
			}
			if (mileageFrom && advert.mileage < parseInt(mileageFrom)) {
				return false;
			}
			if (mileageTo && advert.mileage > parseInt(mileageTo)) {
				return false;
			}
			return true;
		});
	}
);
