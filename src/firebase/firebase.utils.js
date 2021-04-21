import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  const config = {
    apiKey: "AIzaSyDfQDXvyST8nTr7uRjX8ytP55-Ph7nXvkU",
    authDomain: "kings-clothingdb.firebaseapp.com",
    projectId: "kings-clothingdb",
    storageBucket: "kings-clothingdb.appspot.com",
    messagingSenderId: "167024062195",
    appId: "1:167024062195:web:940a270abbd38e9ce91186",
    measurementId: "G-6ZRBG4BGBK"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()

  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt : 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase