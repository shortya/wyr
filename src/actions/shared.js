import { getInitialData, saveQuestionAnswer } from '../util/api'
import { receiveUsers, addUserAnswer } from './users'
import { receiveQuestions, addAnswer } from './questions'
import { setAuthedUser } from './authedUser'

export function handleInitialData (AUTHED_ID) {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
      })
  }
}

export function updateQuestionAnswer( questionAnswer, disableSubmit ){
  return (dispatch) => {

    saveQuestionAnswer(questionAnswer)
      .then( () => {
        dispatch(addAnswer(questionAnswer));
        dispatch(addUserAnswer(questionAnswer));
      });
  }
}