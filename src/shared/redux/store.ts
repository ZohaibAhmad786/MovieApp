import { configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./index";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducers = persistReducer(persistConfig, reducers);
const middlewares: any[] = [ReduxThunk];

const AppStore = () => {
  return configureStore({
    reducer: persistedReducers,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
  });
};

const store = AppStore();

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export default store;
