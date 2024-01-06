import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";


export const useCollection = (c, _q) => {
  const [document, setDocument] = useState(null);

  //set up query
  const q = useRef(_q).current;
  useEffect(() => {
    let ref = collection(db, c);

    if(q){
      ref=query(ref,where(...q))
    }

    const unsub = onSnapshot(ref, (snap) => {
      let books = [];
      snap.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      setDocument(books);
      console.log(books);
    });

    return () => unsub();
  }, [c]);

  return { document };
};
