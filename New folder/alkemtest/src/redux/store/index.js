import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import reducers from '../reducers/index';

const persistConfig = {
    key: 'root',
    //version: 0,     // let assign the current version to 0
    //debug: true,    // debug persistor
    storage:storage
    //stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer)
let persistor = persistStore(store)


export { store, persistor };