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
    dispatch(saveUser({
      id: username,
      name: fullName,
      avatarURL: 'https://png2.kisspng.com/sh/a081e32a899613c6182c6c2bea4376eb/L0KzQYm3VcIyN5R6R91yc4Pzfri0gB9ueKZ5feQ2aXPyfsS0lgNmel51itHvaXzoPbL9ggRiel5ritd3Y3iwgLb2kPxmNWZnSKUBNXW4QrftWPM3Nmg2TKg7MEe2QYa5Vsk1QWQ5UaMENkWxgLBu/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e52ff8c6.7146207315269493491965.png',
      answers: {  },
      questions: [ ]
    }));
    dispatch(setAuthedUser(username));
    return _saveUser(username, fullName)
      .then(res => {
        dispatch(hideLoading());
      })
      .catch(err => {
        alert('There was an error while saving the User. Please try again.');
        dispatch(hideLoading());
      })
  }
}