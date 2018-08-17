import * as firestore from '../firebase/db'
import functions  from '../firebase/firebase'
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
                var onFetchFeedDockletsFromDatabase = functions().httpsCallable('onFetchFeedDockletsFromDatabase');
                onFetchFeedDockletsFromDatabase({text: action.payload}).then(function(result) {
                  // Read result of the Cloud Function.
                  action.payload = result
                }).catch(function(error) {
                  // Getting the Error details.
                  var code = error.code;
                  var message = error.message;
                  var details = error.details;
                });
        break;
        default :
            console.log(action);
    }
    next(action);
} 

export default logger;