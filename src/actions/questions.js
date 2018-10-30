import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestion, _saveQuestionAnswer, _getQuestions } from '../API/_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const getQuestions = (questions) => (
  {
    type: GET_QUESTIONS,
    questions
  }
);

export const saveQuestion = (question) => (
  {
    type: SAVE_QUESTION,
    question
  }
);

export const handleSaveQuestion = ({ optionOneText, optionTwoText, author }) => {
  return (dispatch, getState) => {
    dispatch(showLoading());

    return _saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => {
        dispatch(saveQuestion(question));
        dispatch(hideLoading());
      })
      .catch(err => {
        alert(err)
        dispatch(hideLoading());
      });
  }
}

export const handleSaveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(res => {
        _getQuestions()
          .then(questions => {
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
          })
      })
  }
}