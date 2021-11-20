import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks';

const persistConfig = {
  key: 'c67f7decf1c5984e48e9f12e753cad01',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default store;
export {persistor};
