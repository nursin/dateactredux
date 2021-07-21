import * as ActionTypes from './ActionTypes'

export const printHello = () => ({
  type: ActionTypes.HELLO
})

export const printBye = () => ({
  type: ActionTypes.BYE
})

export const renderChooseForm = () => ({
  type: ActionTypes.LOAD_CHOOSE_FORM
})