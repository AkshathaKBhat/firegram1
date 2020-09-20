import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
//your web app's firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGoEKOcU7fCN2aU8OQtRj7K3BB5Dxx-rE",
    authDomain: "ninja-firegram2020.firebaseapp.com",
    databaseURL: "https://ninja-firegram2020.firebaseio.com",
    projectId: "ninja-firegram2020",
    storageBucket: "ninja-firegram2020.appspot.com",
    messagingSenderId: "510642537724",
    appId: "1:510642537724:web:742f8a65ef96967c368379"
  };
    //initialize firebase 
    firebase.initializeApp(firebaseConfig);
    const projectStorage=firebase.storage();
    const projectfirestore=firebase.firestore();
    const timestamp=firebase.firestore.FieldValue.serverTimestamp;
    export {projectStorage,projectfirestore,timestamp};