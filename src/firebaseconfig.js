import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-vYLG24o07ldnHUspmmNMHtIK37DLvbA",
  authDomain: "staff-management-cbffe.firebaseapp.com",
  databaseURL: "https://staff-management-cbffe-default-rtdb.firebaseio.com",
  projectId: "staff-management-cbffe",
  storageBucket: "staff-management-cbffe.appspot.com",
  messagingSenderId: "849978303903",
  appId: "1:849978303903:web:ff063e75f304ffd30089aa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
