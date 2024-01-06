import React, { useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";
import { useNavigate, useParams } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { Timestamp } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import Chatbox from "../components/Chatbox";
import PlacedStudents from "../components/PlacedStudents";

function CompnayDetails() {
  const { user } = useAuthContext();
  console.log(user);

  const [value, setValue] = useState();
  console.log(value);

  const { id } = useParams();

  const { updateDocument } = useFirestore("comapnys");

  console.log(id);

  const { result } = useGetData("companys", id);
  console.log(result);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
      setValue({ ...doc.data() });
    });

    return () => unsub();
  }, []);

  if (!result) {
    return <p>Loading</p>;
  }

  const notify = () => toast("Apply Successfully");

  const {
    name,
    role,
    downloadUrl,
    companyDetails,
    location,
    link,
    requirements,
    skillSet,
    salary,
    employeType,
    backLog,
    msg,
    date
  } = result;

  console.log(msg)

  
    const foundApplay =result && result?.usersApply?.find((users) => users.UID === user.uid );
    console.log(foundApplay)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applyUser = {
      user: user.displayName,
      UID: user.uid,
      photo: user.photoURL,
      createdAt: Timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(applyUser);

    const noteRef = doc(db, "companys", id);
    await updateDoc(noteRef, {
      apply: true,
      usersApply: [...result.usersApply, applyUser],
    });

    const noteRe = doc(db, "users", user.uid);
    await updateDoc(noteRe, {
      totalApply: [...value.totalApply, applyUser],
    });

    notify();

    // await updateDocument(id,
    //   [...result.usersApply,applyUser]
    //  )

    // await updateDocument(id, { apply: true, userId: user.uid });
    // console.log("update")

    
  };

  return (
    <>
      <div className=" bg-gray-200 dark:bg-gray-900 py-10 mx-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-6 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-fill rounded-full"
                    src={downloadUrl}
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  {name}
                </h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={11} r={3} />
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                  {location}
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  {companyDetails}
                </p>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                {/* <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={48} height={48} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                        <polyline points="4 12 12 16 20 12" />
                                        <polyline points="4 16 12 20 20 16" />
                                    </svg>
                                </div> */}
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                  {role}
                </h2>
                <a className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  {link}
                </a>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center ">
                  {requirements}
                </p>
                <div className="flex items-start flex-wrap gap-4">
                  {skillSet &&
                    skillSet.map((item, i) => {
                      return (
                        <div key={i} className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                          {item}
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal"></h2>
                <h2 className="text-center text-2xl text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Salary
                </h2>
                <h2 className="text-center text-lg text-gray-800 dark:text-gray-100 font-medium tracking-normal mb-6">
                  {salary}
                </h2>

                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  Employe Type
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  {employeType}
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  Allow For Back Log
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  {backLog}
                </h2>

                <h4 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  Last date for Apply
                </h4>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  {date}
                </h2>
                {result && result.apply ? (
                  <button disabled>Done</button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="border py-2 px-10"
                    border
                  >
                    Apply
                  </button>
                )}
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
        <Chatbox {...result} companyId={id} user={user} />
        <PlacedStudents {...result} />
      </div>
    </>
  );
}
export default CompnayDetails;
