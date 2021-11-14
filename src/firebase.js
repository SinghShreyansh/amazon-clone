import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmifkLCxNHoY47rQqplgiuFRC5bX7yfu8",
    authDomain: "clone-981d0.firebaseapp.com",
    projectId: "clone-981d0",
    storageBucket: "clone-981d0.appspot.com",
    messagingSenderId: "266609657779",
    appId: "1:266609657779:web:b876ccc0ee6e777c2f6dc6",
    measurementId: "G-94M241PE05"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  const auth= firebase.auth()

  



  export {db,auth};