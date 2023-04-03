import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// add .env.local to project root.
// should be formatted like this:
//
//   REACT_APP__API_KEY=value goes here
//  

const firebaseConfig = {
    apiKey: process.env.REACT_APP__API_KEY ,
    authDomain: process.env.REACT_APP__AUTH_DOMAIN,
    projectId: process.env.REACT_APP__PROJECT_ID,
    storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP__MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP__APP_ID,
    measurementId: process.env.REACT_APP__MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP__DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app
