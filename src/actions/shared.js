import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions } from '../API/_DATA';
import { getUsers } from './users';
import { getQuestions } from './questions';

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([users, questions]) => {
        dispatch(getUsers(users));
        dispatch(getQuestions(questions));
        dispatch(hideLoading());
      })
  }
}