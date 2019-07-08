import { SET_PAGINATION } from './actionNames'

export const initialState = {
  per: 10,
  page: 1,
  totalItems: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      return ({...state, ...action.pagination})

    default:
      return state
  }
}
