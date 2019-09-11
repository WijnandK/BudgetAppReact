import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCW7M8opqitsl_HDAQlJFHS0ZLpamnYcLU",
  authDomain: "budgetapp-1b0f9.firebaseapp.com",
  databaseURL: "https://budgetapp-1b0f9.firebaseio.com",
  projectId: "budgetapp-1b0f9",
  storageBucket: "",
  messagingSenderId: "826524291958",
  appId: "1:826524291958:web:5e0f9627bc64406c08a057"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
