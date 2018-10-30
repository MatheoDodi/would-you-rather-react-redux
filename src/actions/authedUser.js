export const SET_AUTHED_USER = 'AUTHED_USER';
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER';

export const setAuthedUser = (authedUser) => (
  {
  type: SET_AUTHED_USER,
  authedUser
  }
)

export const unsetAuthedUser = () => (
  {
    type: UNSET_AUTHED_USER
  }
)