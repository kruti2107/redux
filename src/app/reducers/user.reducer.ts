import { ADD_USER, UserActions } from '../actions/user.action';

const initialState = {
  userList:  []
};
export function UserReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state, userList: state.userList.concat(action.payload)};
    default:
      return state;
  }
}
