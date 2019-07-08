import fetch from 'cross-fetch'
import * as ActionNames from './actionNames'

const URL = 'http://localhost:3000'

const setItems = (items) => ({
  type: ActionNames.SET_ITEMS,
  items
})

export const setPaginations = (pagination) => ({
  type: ActionNames.SET_PAGINATION,
  pagination
})

export const loadItems = ({per = 10, page = 1} = {per: 10, page: 1}) => {
  return (dispatch) => {
    return fetch(`${URL}?per=${per}&page=${page}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        dispatch(setItems(json.data))
        dispatch(setPaginations(json.pagination))
      })
  }
}
