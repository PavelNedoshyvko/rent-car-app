import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advertsSlice";
import storage from "redux-persist/lib/storage";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import { filterReducer } from "./filterSlice";

const persistConfig = {
	key: 'adverts',
	storage,
	whitelist: ['adverts'],
};

const rootReducer = combineReducers({
	adverts: advertsReducer,
	filter: filterReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedRootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);