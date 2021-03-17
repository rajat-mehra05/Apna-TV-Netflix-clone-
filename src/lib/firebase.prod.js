import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
/* import { seedDatabase } from "../seed"; */

// we need to somehow see the database

//config required here
const config = {
  apiKey: "AIzaSyB3XXjj2dE9cmAm843QkdOW48G7DJdPoTM",
  authDomain: "netflix-clone-fdeba.firebaseapp.com",
  projectId: "netflix-clone-fdeba",
  storageBucket: "netflix-clone-fdeba.appspot.com",
  messagingSenderId: "372613729069",
  appId: "1:372613729069:web:3a2f465ab9afd73c17a1a4",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };

// run the line 20 only once.
// once your database is populated, make sure you comment the line 20
// to avoid replication of the data
