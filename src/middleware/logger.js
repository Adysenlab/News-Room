/**
 * the path to the file having the path of the 
 * structures present in the database 
 * 
 */
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
        action.payload = userInfo.data()
        ).catch(error => action.payload = error)
        
        break;
                
        case "USER_GET_FEED_DOCKLETS":
               
        break;
        default :
            console.log(action);
    }
    next(action);
} 

export default logger;