import { db } from '../firebase/firebase'

export function getFirestoreData(){
    // let ref=db.doc('labs/computation/demonstrational/Database/software /releaseSchedules').get()
    // return dispatch =>{
        
    //         dispatch({
    //             type:'POSTS_GET',
    //             payload: ref.data()
    //         });
        
    // }
    let ref=db.doc('labs/computation/demonstrational/Database/software /releaseSchedules').get()
    return{
         type:"POSTS_GET",

        payload: db.doc('labs/computation/demonstrational/Database/software /releaseSchedules').get().then(function(doc) {
            return doc;
        }).catch( (error) =>{
            console.log(error);
        })

    }


}