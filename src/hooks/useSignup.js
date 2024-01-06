import { useState, useEffect } from "react";


import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase/config";
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";




export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const notify = () => toast("Signup successfull");

  const navigate = useNavigate()

  const signup = async (email, password, displayName, profileImg,fullobj) => {
    setError(null);
    setIsPending(true);

    console.log(fullobj);

    try {
      console.log(email, password, displayName, profileImg);

      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imageRef = ref(
        storage,
        `images/${profileImg.name}/${res.user.uid}`
      );
      await uploadBytes(imageRef, profileImg);
      const downloadUrl = await getDownloadURL(imageRef);

      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: downloadUrl,
      });

      console.log(downloadUrl);

      

      await setDoc(doc(db, "users", res.user.uid), {
        displayName,
        online: true,
        photoURL: downloadUrl,
        name: fullobj.name,
        age: fullobj.age,
        gmailId: fullobj.gmailId,
        registerNumber: fullobj.registerNumber,
        tenthMarks: fullobj.tenthMarks,
        pucMarks: fullobj.pucMarks,
        degreeMarks: fullobj.degreeMarks,
        fatherName: fullobj.fatherName,
        motherName: fullobj.motherName,
        address: fullobj.address,
        totalApply:[],
        msg:[]
      }).catch((err) => {
        console.log("something went wrong");
      });

      console.log("hello")
      navigate("/")
      notify()

      



      


      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};






      // const uploadPath = `thumbnails/${res.user.uid}/${profile.name}`
      // const img = await storage.ref(uploadPath).put(profile)
      // const imgURL = await img.ref.getDownloadURL()

      // const userProjectsColRef = collection(
      //   db,
      //   "users",
      //   currentUser.uid,
      //   "projects"
      // );
      // const newProjectDocRef = doc(userProjectsColRef);
      // addDoc(collection(newProjectDocRef, "tasks"), {
      //   /* ... data ... */
      // });

      // add display name to user
    

      // console.log(res);

      //  const userProjectsColRef = collection(
      //   db,
      //   "users",
      //   res.user.uid,
      // );
      // const newProjectDocRef = doc(userProjectsColRef);
      // addDoc(collection(newProjectDocRef, "users"), {
      //   displayName,
      //   photoURL:ImageURL,
      //   online:true

      // });

      // console.log(res.user.uid);

      // await db.collection("Users")
      // .doc(res.user.uid).set({
      //   displayName,
      //   photoURL:ImageURL,
      //   online:true
      // })