//@ts-check
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'
import rootReducer from './reducers'
import sagas from './sagas'
import createSagaMiddleware from 'redux-saga'
import { analyticsLogger } from './Analytics/AnalyticsLogger'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    
    const enhancers = []
    let middleware = [logger]
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware);
    middleware.push(analyticsLogger);
    enhancers.push(applyMiddleware(...middleware))
    
    let store = createStore(persistedReducer, compose(...enhancers))
    let persistor = persistStore(store)
    
    sagaMiddleware.run(sagas)
    return { store, persistor }
}