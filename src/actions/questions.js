import { saveQuestion } from '../util/api'
import { addUserQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

function addQuestion( question ){
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addAnswer (questionAnswer){

  const { authedUser,qid,answer } = questionAnswer;

  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer
  }
}

export function updateQuestion (question) {
  return (dispatch) => {
    saveQuestion(question)
      .then((q) => {
        dispatch(addQuestion(q));
        dispatch(addUserQuestion(q));
      })
  }
}

export function receiveQuestions( questions ){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

