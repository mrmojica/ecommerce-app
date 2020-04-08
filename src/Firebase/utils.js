import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// Always trigger google popup whenever we use GoogleAuthProvider - Authentication/ Signin
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
