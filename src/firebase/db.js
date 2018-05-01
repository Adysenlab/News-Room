import { db } from './firebase';

// User API

export const doCreateCards = (id, tittle, data) =>
  db.ref(`posts/findings/${id}`).set({
    tittle,
    data,
  });

export const onceGetPosts = () =>
  db.collection('posts').doc('findings').get().catch(function(){
    console.log('error: could not find load document reference');
  })

// Other db APIs ...
