import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm24nwgr8xSNhXgQbW3sWJnkoH5qApd5w",
  authDomain: "tarun-kumar-67e87.firebaseapp.com",
  projectId: "tarun-kumar-67e87",
  storageBucket: "tarun-kumar-67e87.appspot.com",
  messagingSenderId: "228921642952",
  appId: "1:228921642952:web:178f4b87cb181fd7b97afd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
