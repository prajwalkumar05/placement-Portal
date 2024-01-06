import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const { user, authIsReady } = useAuthContext();

  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const { result } = useGetData("users", user.uid);
  console.log(result);

  if (!result) {
    return <p>Loading</p>;
  }

  const {
    address,
    age,
    degreeMarks,
    displayName,
    fatherName,
    gmailId,
    motherName,
    name,
    online,
    photoURL,
    pucMarks,
    registerNumber,
    tenthMarks,
  } = result;

  return (
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
                  src={photoURL}
                  alt="avatar"
                />
              </div>
              <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                {displayName}
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
                {registerNumber}
              </p>
              <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                {address}
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
              <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-6">
                Personal Information
              </h2>
              <p className="text-gray-600 dark:text-gray-100 text-lg tracking-normal font-normal mb-1 text-center">
                Gmail ID
              </p>
              <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center ">
                {gmailId}
              </p>

              <p className="text-gray-600 dark:text-gray-100 text-lg tracking-normal font-normal mb-1 text-center">
                Father Name
              </p>
              <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center ">
                {fatherName}
              </p>

              <p className="text-gray-600 dark:text-gray-100 text-lg tracking-normal font-normal mb-1 text-center">
                Mother Name
              </p>
              <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center ">
                {motherName}
              </p>


              
              {/* <div className="flex items-start flex-wrap gap-4">
              {skillSet &&
                skillSet.map((item, i) => {
                  return (
                    <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                      {item}
                    </div>
                  );
                })}
            </div> */}
            </div>
            <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
            <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
              All Marks 
            </h2>
            <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
            Degree Marks
            </h2>
            <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
             {degreeMarks}
            </h2>
            <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
              PUC Marks
            </h2>
            <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
              {pucMarks}
            </h2>
            <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
              SSLC Marks
            </h2>
            <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
              {tenthMarks}
            </h2>
            
            
            </div>
          </div>
          {/* Card code block end */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
