import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJKkBzm_H4mVVc2GAo84zgCOQLTbWvhIk",
  authDomain: "dfe-dmrn-24t1-m1l-gregory.firebaseapp.com",
  databaseURL: "https://dfe-dmrn-24t1-m1l-gregory-default-rtdb.firebaseio.com",
  projectId: "dfe-dmrn-24t1-m1l-gregory",
  storageBucket: "dfe-dmrn-24t1-m1l-gregory.appspot.com",
  messagingSenderId: "876430071863",
  appId: "1:876430071863:web:bd01c42862155602e247b2"
};

const app = initializeApp(firebaseConfig);

export default app;