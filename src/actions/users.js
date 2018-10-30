import { showLoading, hideLoading } from 'react-redux-loading';
import {  _saveUser } from '../API/_DATA';

const GET_USERS = 'GET_USERS';
const SAVE_USER = 'SAVE_USER';

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

export const handleSaveUser = (username, fullName, avatarURL) => {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveUser(username, fullName, avatarURL)
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