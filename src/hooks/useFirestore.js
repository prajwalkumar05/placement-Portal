import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { useReducer, useEffect, useState } from "react"
import { db,Timestamp } from "../firebase/config"


let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    case "UPDATED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true,  error: null }
    default:
      return state
  }
}

export const useFirestore = (coll) => {

  

  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const refDB = collection(db, coll)


  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }
  
  // add a document
  const addDocument = async (doc) => {
    
    dispatch({ type: 'IS_PENDING' })

    

    try {
      console.log(doc)
      console.log(coll)
      const createdAt = Timestamp.fromDate(new Date())
      const addedDocument=await addDoc(collection(db, coll), {
          ...doc,
          createdAt
        });
        console.log(addedDocument)
      

      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      await refDB.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" })

    try {
      const noteRef = doc(db, "companys", id);
      const updatedDocument = await updateDoc(noteRef, {
        result:updates
      });
      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    } 
    catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }

}