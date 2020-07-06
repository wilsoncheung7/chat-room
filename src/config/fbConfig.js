import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgpGi_wUtKPkNxgZZktUTeBHLVRry9kIA",
    authDomain: "wewsuns-project-1552327221411.firebaseapp.com",
    databaseURL: "https://wewsuns-project-1552327221411.firebaseio.com",
    projectId: "wewsuns-project-1552327221411",
    storageBucket: "wewsuns-project-1552327221411.appspot.com",
    messagingSenderId: "374819260316",
    appId: "1:374819260316:web:186477fb48e89e3b52ea59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;