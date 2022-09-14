import { collection,addDoc, setDoc, doc,deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const handleDelete =async(id)=>{
    const docRef = doc(db,"users",id)
    await deleteDoc(docRef)
}