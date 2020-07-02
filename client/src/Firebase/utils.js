import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5UShtnOc3JnUORwDTfHcNsHxPI54Q2O0",
  authDomain: "ecommerce-db-aa529.firebaseapp.com",
  databaseURL: "https://ecommerce-db-aa529.firebaseio.com",
  projectId: "ecommerce-db-aa529",
  storageBucket: "ecommerce-db-aa529.appspot.com",
  messagingSenderId: "903310405557",
  appId: "1:903310405557:web:320b9ff38259f0b071b3fc",
  measurementId: "G-BXT10TMLZQ"
};

// firebase.User reference
// https://firebase.google.com/docs/reference/js/firebase.User
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  // Use firebase query reference to get snapShot data
  // to see if user exist. Create user if.
  // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create new user.
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Add shop data to Firebase
// Note: call once in App.js componentDidMount so we do not
// have to manually enter all the data into Firebase.
// https://firebase.google.com/docs/firestore/manage-data/transactions
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     // get a new document ref and generate a new id
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

firebase.initializeApp(firebaseConfig);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Always trigger google popup whenever we use GoogleAuthProvider - Authentication/ Signin
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
