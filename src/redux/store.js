import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advertsSlice";
import { filterReducer } from "./filterSlice";
import { favoriteReducer } from "./favoriteSlice";
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


const persistConfig = {
	key: 'favorites',
	storage,
	whitelist: ['favorites'],
};

const rootReducer = combineReducers({
	adverts: advertsReducer,
	favorites: favoriteReducer,
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