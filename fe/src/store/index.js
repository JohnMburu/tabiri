
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/index';
import thunk from "redux-thunk";

export const history = createBrowserHistory()


export default function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      composeEnhancers(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          thunk,// ... other middlewares ...
        ),
      ),
    )
  
    return store
  }