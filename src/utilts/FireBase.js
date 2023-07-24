import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCtb85bRYA6Sudj_J2Isv7USId32goPEwE",
  authDomain: "obsera-shops-db.firebaseapp.com",
  projectId: "obsera-shops-db",
  storageBucket: "obsera-shops-db.appspot.com",
  messagingSenderId: "39716972429",
  appId: "1:39716972429:web:10d0228e538dff5fe4bfc4",
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const SignInWithGoogelPopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserCollectionFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
  const usersnapshoot = await getDoc(userDocRef);
  console.log(usersnapshoot);
  console.log(usersnapshoot.exists());
  if (!usersnapshoot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("there is an error while creating user", error.message);
    }
  }
  return userDocRef;
};
