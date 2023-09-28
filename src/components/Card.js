import React from "react";
import {Link} from "react-router-dom"
import one from '../assets/one.png'
import two from '../assets/two.png'
import third from '../assets/third.png'
// import blue_coding from '../assets/blue_coding.png'

const Card = ({name,to}) => {
  console.log(name)
  return (
      <Link to={`/${to}`}>
        <div className=" flex flex-col justify-center items-center w-64 bg-white shadow-xl hover:scale-110 hover:transition-all duration-500   ">
      <figure className="pt-5">
        <img
          src={third}
          alt="Shoes"
          className=" h-auto w-auto object-fit"
        />
      </figure>
      <div className="card-body items-center text-center text-black ">
        <h2 className="card-title font-bold">{name}</h2>
      </div>
    </div>
      </Link>
  );
};

export default Card;
