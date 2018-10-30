import { GET_USERS, SAVE_USER } from '../actions/users';
import { SAVE_QUESTION } from '../actions/questions';

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
    default : 
      return state;
  }
}