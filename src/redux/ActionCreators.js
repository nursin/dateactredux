import * as ActionTypes from './ActionTypes'

export const selectedChooseFormValues = (formValues) => ({
  type: ActionTypes.SELECTED_CHOOSE_FORM_VALUES,
  payload: formValues
});
