import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { todoReducer } from './reducer/todoReducer';

const persistConfig = {
  key: 'todo',
  storage:storage.default,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

 export let store = createStore(persistedReducer)
 export let persistor = persistStore(store)