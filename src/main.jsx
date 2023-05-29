import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules/index.js'
import { Provider } from 'react-redux';
// import loggerMiddleware from './lib/loggerMiddleware'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
const logger = createLogger()
const store = createStore(rootReducer,applyMiddleware(thunk,logger));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
