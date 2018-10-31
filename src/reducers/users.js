import { GET_USERS, SAVE_USER } from '../actions/users';
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';
import { UNSET_AUTHED_USER } from '../actions/authedUser';

export default function (state = {}, action) {
  switch ( action.type ) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_USER :
      return {
        ...state,
        [action.user.id] : {
          ...action.user
        }
      }
    case SAVE_QUESTION : 
      return {
        ...state,
          [action.question.author]: {
            ...state[action.question.author],
            questions: state[action.question.author].questions.concat([action.question.id])
          }
        }
    case SAVE_QUESTION_ANSWER : 
     return {
       ...state,
       [action.authedUser]: {
         ...state[action.authedUser],
         answers: {
           ...state[action.authedUser].answers,
           [action.qid]: action.answer
         }
       }
     }
    case UNSET_AUTHED_USER : 
     return {}
    default : 
      return state;
  }
}