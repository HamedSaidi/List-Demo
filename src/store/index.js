import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import items from './items'
import pagination from './pagination'

export default (state) => createStore(
  combineReducers({items, pagination}),
  state,
  applyMiddleware(thunkMiddleware)
)
