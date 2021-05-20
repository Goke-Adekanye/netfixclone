import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

//firebase config
const config = {
  apiKey: "AIzaSyAqDUSOaURORlLJb-gBmMGDWSTg9ft18sA",
  authDomain: "netflix-790e7.firebaseapp.com",
  projectId: "netflix-790e7",
  storageBucket: "netflix-790e7.appspot.com",
  messagingSenderId: "763019151152",
  appId: "1:763019151152:web:d21fea7d10cd300a6f2af5",
};

const firebase = Firebase.initializeApp(config);

//seed the database
// seedDatabase(firebase);

export { firebase };
