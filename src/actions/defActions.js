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
         type:"ADD_POST",     //  "POSTS_GET",
        payload: 5
        // payload: db.doc('labs/computation/demonstrational/Database/software /releaseSchedules').get().then(function(doc) {
        //     if (doc.exists) {
        //         console.log(doc.id, "Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch( (error) =>{
        //     console.log(error);
        // })

    }


}