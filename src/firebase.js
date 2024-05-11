import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF1_VBVpCuBbHgfxBOLETBRfmWNvFko88",
  authDomain: "netflix-clone-41f56.firebaseapp.com",
  projectId: "netflix-clone-41f56",
  storageBucket: "netflix-clone-41f56.appspot.com",
  messagingSenderId: "466441352691",
  appId: "1:466441352691:web:e2b784d5389c7ec5148e86",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;
// export { app, auth };
// export default db;

//firestore is equal with db on firebase
