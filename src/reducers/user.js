const INITIAL_STATE = {
  users: {},
};

// pure immutable function
const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USERS_SET' : {
      return applySetUsers(state, action);
    }
    default : return state;
  }
}

export default userReducer;