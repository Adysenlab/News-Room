import  * as firestore from '../firebase/db'

export function getProjects(){
    let ref=firestore.projectsRef.get().then(function(snap) {
        snap.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
             
        
                dispatch({
                    type:'PROJ_SEARCH',
                    payload: doc.data()
                })
           
        });
    
    }).catch((error) => {
        console.log('Error' + error);
        
    })



}