import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBBVxVe0GY7Rv0C-Kbp43ceoVT3ub-wAdo",
    authDomain: "chat-app-react-native-4a471.firebaseapp.com",
    databaseURL: "https://chat-app-react-native-4a471-default-rtdb.firebaseio.com",
    projectId: "chat-app-react-native-4a471",
    storageBucket: "chat-app-react-native-4a471.appspot.com",
    messagingSenderId: "870690087085",
    appId: "1:870690087085:web:e9252fb917ade4ca8e6624",
    measurementId: "G-NX31JHRP2B"
  };
  // Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = app.database()
  