const INITIAL_STATE = {
  user: {},
};

// pure immutable function
const applySetUsers = (state, action) => ({
  ...state,
  user: action.users
});

const getUserImg = (state, action) => ({
  ...state,
  photo: action.payload
});

function userReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'USERS_SET' : {
      return applySetUsers(state, action);
    }
    case 'USER_IMG_GET': {
      return getUserImg(state, action);
    }
    default : return state;
  }
}

export default userReducer;