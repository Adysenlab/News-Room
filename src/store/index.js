import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

//all middle wares
import cursor from '../middleware';  
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"


const store = createStore(rootReducer,applyMiddleware(cursor, thunk));
store.subscribe(()=> {
    console.log("store updated! ", store.getState())
})

export default store;