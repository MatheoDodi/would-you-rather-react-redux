import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../actions/authedUser';

export default function (state = null, action) {
  switch ( action.type ) {
    case SET_AUTHED_USER :
      return action.authedUser
    case UNSET_AUTHED_USER :
      return null
    default :
      return state;
  }
}