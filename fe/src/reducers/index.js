import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {rootReducer} from './reducers';

export default (history) => combineReducers({
  router: connectRouter(history),
  rootReducer:rootReducer,


   // rest of your reducers
})


