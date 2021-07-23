//types
import * as ActionTypes from './ActionTypes'

//data



const initialState = {
  changePageValue: false
}

export const changePage = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_REDIRECT:
      if (state.changePageValue === false) {
        return { ...state, changePageValue: true }
      } else {
        return { ...state, changePageValue: false }
      }
    // case ActionTypes.LOAD_CHOOSE_FORM:
    //   return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY, CardButton: CHOOSE_FORM_CARD_BUTTON }
    // case ActionTypes.LOAD_PROFILE:
    //   return { ...state, CardHeader: CHOOSE_FORM_CARD_HEADER, CardBody: CHOOSE_FORM_CARD_BODY }
    default:
      return state
  }
}
