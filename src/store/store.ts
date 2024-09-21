import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['product']
}

const productConfig = {
  key: 'product',
  storage,
  whitelist: ['basketProducts', 'favouriteProducts']
}

const rootReducer = combineReducers({
  product: persistReducer(productConfig, productReducer)
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;