import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestion, _saveQuestionAnswer } from '../API/_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

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

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => (
  {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
);

export const handleSaveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(saveQuestionAnswer({ authedUser, qid, answer }));
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(res => {
        dispatch(hideLoading());
      })
      .catch(err => alert(err));
  }
}