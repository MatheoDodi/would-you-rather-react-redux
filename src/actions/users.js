import { showLoading, hideLoading } from 'react-redux-loading';
import {  _saveUser } from '../API/_DATA';
import { setAuthedUser } from './authedUser';

export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';

export const getUsers = (users) => (
  {
    type: GET_USERS,
    users
  }
)

export const saveUser = (user) => (
  {
    type: SAVE_USER,
    user
  }
)

export const handleSaveUser = (username, fullName) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(username));
    return _saveUser(username, fullName)
      .then(user => {
        dispatch(saveUser(user));
        dispatch(hideLoading());
      })
      .catch(err => {
        alert('There was an error while saving the User. Please try again.');
        dispatch(hideLoading());
      })
  }
}