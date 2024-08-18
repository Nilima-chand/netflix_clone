// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword,  getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBVgIw8WKQ0_z1kGMEuk47GV_hjjcQALQk",
  authDomain: "nitflix-clone-9bb18.firebaseapp.com",
  projectId: "nitflix-clone-9bb18",
  storageBucket: "nitflix-clone-9bb18.appspot.com",
  messagingSenderId: "102607603654",
  appId: "1:102607603654:web:d57ea445808cd64ba394c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
 try {
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user;
   await addDoc(collection(db, "user"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
   })
 } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
 }
}

const login = async (email,password)=>{
try {
   await signInWithEmailAndPassword(auth, email, password);
} catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));

}
}

const logout = ()=>{
    signOut(auth)
}

export {auth, db, login, signup, logout};