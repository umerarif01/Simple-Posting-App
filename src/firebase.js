import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDS5llr3oEAW1RH0KKN3Du9bYYbWscEDbY",
    authDomain: "social-prototype-ce32f.firebaseapp.com",
    projectId: "social-prototype-ce32f",
    storageBucket: "social-prototype-ce32f.appspot.com",
    messagingSenderId: "574173361779",
    appId: "1:574173361779:web:27dec29f840c363c441c06"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  export {db,auth};