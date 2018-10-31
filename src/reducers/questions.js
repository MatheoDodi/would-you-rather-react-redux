import { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';
import { UNSET_AUTHED_USER } from '../actions/authedUser';

export default function questions (state = {}, action) {
  switch( action.type ) {
    case GET_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION : 
      return {
        ...state,
        [action.question.id] : action.question
      }
    case SAVE_QUESTION_ANSWER :
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    case UNSET_AUTHED_USER :
    return {}
    default : 
      return state;
  }
}