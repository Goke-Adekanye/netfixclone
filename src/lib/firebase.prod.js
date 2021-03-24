import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

//firebase config
const config = {
  apiKey: "AIzaSyA5oCVXuwUi84dvyU0J-zJrqMRSwGnTpv8",
  authDomain: "netflix-clone-339b3.firebaseapp.com",
  projectId: "netflix-clone-339b3",
  storageBucket: "netflix-clone-339b3.appspot.com",
  messagingSenderId: "681928060589",
  appId: "1:681928060589:web:9c61becf3ff0c2e929e024",
};

const firebase = Firebase.initializeApp(config);

//seed the database
//seedDatabase(firebase);

export { firebase };
