import React from "react";
import { useCollection } from "../hooks/useCollection";
import useGetData from "../hooks/useGetData";

const Dashboard = ({ uid }) => {
  console.log(uid);

  const { document } = useCollection("companys");
  console.log(document && document.length);

  const { result } = useGetData("users", uid);

  if (!result) {
    return <p>Loading</p>;
  }
  console.log(result);

  return (
    <div className="stats bg-white shadow flex justify-center mx-20 my-24">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-2xl">Total Companys</div>
        <div className="stat-value text-primary">
          {document && document.length}
        </div>
      </div>

      {/* <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Eligible for Apply</div>
        <div className="stat-value text-secondary">4</div>
      </div> */}

      <div className="stat">
        <div className="stat-title text-2xl">Total Apply</div>
        <div className="stat-value text-primary">
          {result && result.totalApply?.length}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
