import { GET_QUESTIONS, SAVE_QUESTION } from '../actions/questions';

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
    default : 
      return state;
  }
}