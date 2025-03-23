import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
        getAuth, 
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";
import { addDoc,
        collection,
        getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCBdAw-_VpajAUPabOpDE5rZ5oEv1jK48",
  authDomain: "netflixclone-8e674.firebaseapp.com",
  projectId: "netflixclone-8e674",
  storageBucket: "netflixclone-8e674.firebasestorage.app",
  messagingSenderId: "215446105378",
  appId: "1:215446105378:web:d82de34beef7ca4e30c97b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db=getFirestore(app)

const signup=async(name,email,password)=>{
try {
   const res= await createUserWithEmailAndPassword(auth,email,password)
   const user=res.user
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   })
} catch (error) {
    console.log("error in db",error)
    alert(error)
    
}
}
const login = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log("error in login db",error)
        alert(error)
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}