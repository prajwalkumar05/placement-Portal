import React from "react";
import {Link} from "react-router-dom"
import one from '../assets/one.png'
import two from '../assets/two.png'
import third from '../assets/third.png'
// import blue_coding from '../assets/blue_coding.png'

const Card = () => {
  return (
      <Link to="/hello">
        <div className=" flex flex-col justify-center items-center   w-64 bg-white shadow-xl hover:scale-125 ">
      <figure className="pt-5">
        <img
          src={third}
          alt="Shoes"
          className=" h-auto w-auto object-fit"
        />
      </figure>
      <div className="card-body items-center text-center text-black ">
        <h2 className="card-title font-bold">Shoes!</h2>
      </div>
    </div>
      </Link>
  );
};

export default Card;
