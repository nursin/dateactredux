//types
import * as ActionTypes from './ActionTypes'

//data
import { INSTRUCTIONS_CARD_HEADER, INSTRUCTIONS_CARD_BODY,INSTRUCTIONS_CARD_BUTTON } from '../shared/instructions';
import { CHOOSE_FORM_CARD_HEADER, CHOOSE_FORM_CARD_BODY, CHOOSE_FORM_CARD_BUTTON } from '../shared/chooseForm';
import { PROFILE_CARD_HEADER, PROFILE_FORM_CARD_BODY } from '../shared/profile';


const initialState = {
  CardHeader: null,
  CardBody: null,
  CardButton: null
}

export const GameCard = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_HOME_CARD_HEADER:
      return { ...state, CardHeader: '' }
    case ActionTypes.LOAD_CHOOSE_FORM:
      return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY, CardButton: CHOOSE_FORM_CARD_BUTTON }
    case ActionTypes.LOAD_PROFILE:
      return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY }
    default:
      return { ...state, CardHeader: INSTRUCTIONS_CARD_HEADER, CardBody: INSTRUCTIONS_CARD_BODY, CardButton: INSTRUCTIONS_CARD_BUTTON }
  }
}
