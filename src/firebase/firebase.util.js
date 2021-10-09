import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDmVLRDuolFRnt5ZqYu7aAlK7xhsk0tK8g",
  authDomain: "nimrit-clothing.firebaseapp.com",
  projectId: "nimrit-clothing",
  storageBucket: "nimrit-clothing.appspot.com",
  messagingSenderId: "336443569974",
  appId: "1:336443569974:web:7eaf00d3b178b52b7f2597",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserAuthDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (snapShot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  data.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const getShopCollections = (snapshot) => {
  return snapshot.docs.reduce((collections, doc) => {
    const { title, items } = doc.data();
    collections[title.toLowerCase()] = {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
    return collections;
  }, {});
};

export default firebase;
