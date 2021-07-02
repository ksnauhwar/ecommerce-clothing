import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDmVLRDuolFRnt5ZqYu7aAlK7xhsk0tK8g",
    authDomain: "nimrit-clothing.firebaseapp.com",
    projectId: "nimrit-clothing",
    storageBucket: "nimrit-clothing.appspot.com",
    messagingSenderId: "336443569974",
    appId: "1:336443569974:web:7eaf00d3b178b52b7f2597"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;