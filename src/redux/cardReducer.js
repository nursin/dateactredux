//types
import * as ActionTypes from './ActionTypes'

//data
import { INSTRUCTIONS_CARD_HEADER, INSTRUCTIONS_CARD_BODY } from '../shared/instructions';
import { CHOOSE_FORM_CARD_HEADER, CHOOSE_FORM_CARD_BODY } from '../shared/chooseForm';


const initialState = {
  greeting: null,
  CardHeader: null,
  CardBody: null
}

export const Greeting = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO:
      return { ...state, greeting: 'Hello World!' }
    case ActionTypes.BYE:
      return { ...state, greeting: 'Bye Bye!' }
    default:
      return state
  }
}

export const GameCardHeader = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_HOME_CARD_HEADER:
      return { ...state, CardHeader: '' }
    case ActionTypes.LOAD_CHOOSE_FORM:
      return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY }
    default: 
      return { ...state, CardHeader: INSTRUCTIONS_CARD_HEADER, CardBody: INSTRUCTIONS_CARD_BODY }
  }
}
