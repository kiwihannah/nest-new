import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';

export const storage = getStorage(
  firebase.initializeApp({
    apiKey: 'AIzaSyDSkNBdm5nEe5Sbnl91X7E7KFGIMJmpy4s',
    authDomain: 'library-a0b99.firebaseapp.com',
    projectId: 'library-a0b99',
    storageBucket: 'library-a0b99.appspot.com',
    messagingSenderId: '247984733026',
    appId: '1:247984733026:web:d0f52308634ef3d23a0a3b',
  }),
);
