import React from "react";
import third from '../assets/third.png'
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl border h-[100px] w-[60%] m-3">
      <figure>
        <img
          src={third}
          alt="Movie"
          className="h-[100px] w-[100px]"
        />
      </figure>
      <div className="card-body mt-[-20px]">
        <h2 className="card-title">Company:Infosys</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <Link to='/cd' className="btn btn-primary mt-[-50px]">Watch</Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
