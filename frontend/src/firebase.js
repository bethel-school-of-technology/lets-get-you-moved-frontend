import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCLW7yw_js98QDV4gz9y7nOSA_uGS8T1ws',
  authDomain: 'group-project-286920.firebaseapp.com',
  databaseURL: 'https://group-project-286920.firebaseio.com',
  projectId: 'group-project-286920',
  storageBucket: 'group-project-286920.appspot.com',
  messagingSenderId: '442321577395',
  appId: '1:442321577395:web:e6589bd1fd39aa7d6997c6',
  measurementId: 'G-Y5PE2V2JB2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
