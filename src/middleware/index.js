/**
 * this fuction handles the assync loading of the firebase activities 
 * @param {*} store 
 */

const cursor= (store) => (next) => (action) => {
    console.log("logged middleware" , action);
    switch (action.type){
        case 'POSTS_GET':
        console.log(action.payload.data);
        return console.payload;
    }
    next(action);
} 

export default cursor;

