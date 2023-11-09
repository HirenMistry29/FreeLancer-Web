// Import the functions you need from the SDKs you need
import { initializeApp }    from "firebase/app";
import { getAuth }          from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

// import { getAnalytics }     from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// -------------Previous--------------------
const firebaseConfig = {
  apiKey: "AIzaSyCoakKbO-ZkUrVmHQyEM_nzUh7MYdA4L60",
  authDomain: "freelancer-resume.firebaseapp.com",
  projectId: "freelancer-resume",
  storageBucket: "freelancer-resume.appspot.com",
  messagingSenderId: "89695132361",
  appId: "1:89695132361:web:adcb66f35e5125b4004b18",
  measurementId: "G-JECWYK5LTM"
};

// -----------------NEW--------------------------
// const firebaseConfig = {
//   apiKey: "AIzaSyADi_K3WI_vJ7EMIDV8OCBnl1Bu0pIqeVQ",
//   authDomain: "job-dekho-1b1c1.firebaseapp.com",
//   projectId: "job-dekho-1b1c1",
//   storageBucket: "job-dekho-1b1c1.appspot.com",
//   messagingSenderId: "216917474193",
//   appId: "1:216917474193:web:b245545c3f4585f8a87830",
//   measurementId: "G-8G8Y4R5GKW"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStoreDB = getFirestore(app);
export const realtimeDB = getDatabase(app);
// const analytics = getAnalytics(app);
export default app;

