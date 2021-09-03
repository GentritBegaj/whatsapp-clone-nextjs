import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD09NQ6ttZoEqJL-gKq69aqepZ4pCRppj8',
  authDomain: 'whatsapp-clone-next-272c8.firebaseapp.com',
  projectId: 'whatsapp-clone-next-272c8',
  storageBucket: 'whatsapp-clone-next-272c8.appspot.com',
  messagingSenderId: '87043349137',
  appId: '1:87043349137:web:887465437caa732326bd30',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

module.exports = { db, auth, provider };
