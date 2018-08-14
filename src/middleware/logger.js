import * as firestore from '../firebase/db'

/**
 * this fuction handles the assync loading of the firestore activities 
 * @param {*} store 
 */

const logger= (store) => (next) => (action) => {
    console.log("logged middleware" , action);
    switch (action.type){
        case 'USER_LOGS_GET':
        firestore.usersRef.doc(action.payload).get().then(userInfo =>
        action.payload = userInfo.data())
        
        break;
        default :
            console.log(action);
    }
    next(action);
} 

export default logger;