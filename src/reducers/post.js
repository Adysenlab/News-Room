const INITIAL_STATE = {
  // the object prototype that holds the data to be displayed on site
    posts: {},
    pjhandles: []  
  };
  
  const applySetPosts = (state, action) => ({
    ...state, // destructuring es6
    posts: action.payload
  });

function postReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'PROJECTS' : {
      console.log('posts set')
      return applySetPosts(state, action);
    
    };
    break;
    case 'POSTS_GET': {
      console.log("posts get" , action )
      return applySetPosts(state, action); // change tis function
    };
    break;
    
    case 'ADD_POST': {
      console.log("posts add" , action )
      return state = state + action.payload; 
    };
    break;
    default : return state;
  }
}
  
export default postReducer;