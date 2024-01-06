import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


import { useAuthContext } from "./useAuthContext";
import { auth, db } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch,user } = useAuthContext();



  const logout = async () => {
    console.log('i am logout')
    setError(null);
    setIsPending(true);

    console.log(user.uid)

    try {
      // sign the user out
     
      await auth.signOut();

      console.log("working")

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }

    
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
