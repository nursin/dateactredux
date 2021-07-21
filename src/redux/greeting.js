import * as ActionTypes from './ActionTypes'

const initialState = {
  greeting: null
}

export const Greeting = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO:
      return {...state, greeting: 'Hello World!'}
    case ActionTypes.BYE:
      return {...state, greeting: 'Bye Bye!'}
    default:
      return state
  }
}
