import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBE4ROC0PilDl6mwOAtQnBzwHmk348QGiQ",
  authDomain: "byte-shop-dc8a8.firebaseapp.com",
  projectId: "byte-shop-dc8a8",
  storageBucket: "byte-shop-dc8a8.appspot.com",
  messagingSenderId: "12990828420",
  appId: "1:12990828420:web:aeb01e9a99a46fe46ad7d1"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth);
  const userDocRef = doc(db, 'users', userAuth.uid);

  // Enables us to check if the data related to that reference really exists
  // with 'userSnapshot.exists()' and to accesss that data
  const userSnapshot = await getDoc(userDocRef); 

  if (!userSnapshot.exists()) {
    console.log("User data did not exist. Creating it...");

    const { displayName, email } = userAuth;
    const createdAt = Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error) {
      console.log('error creating the user', error);
    }
  }

  return userDocRef;
}