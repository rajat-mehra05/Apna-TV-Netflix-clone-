import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
/* import { seedDatabase } from "../seed"; */

// we need to somehow see the database

//config required here
// use your own firebase config
const config = {
  apiKey: "",
  authDomain: "",
  projectId: "ba",
  storageBucket: "",
  messagingSenderId: "3",
  appId: "1",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };

// run the line 20 only once.
// once your database is populated, make sure you comment the line 20
// to avoid replication of the data
