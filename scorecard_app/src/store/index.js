import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducers from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer)
let persistor = persistStore(store)

console.log("persistor-->",persistor.getState());

export { store, persistor };