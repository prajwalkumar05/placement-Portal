import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/config';



const useGetData = (col,id) => {
  const [result,setResult]=useState()

  useEffect(() => {
    
    const unsub = onSnapshot(doc(db, col, id), (doc) => {
        console.log("Current data: ", doc.data());
        setResult({...doc.data()})
    });

    
    return () =>  unsub()
    
  }, [col,id])
  

  return {result}
}

export default useGetData