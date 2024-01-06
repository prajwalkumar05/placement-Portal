import React, { useEffect, useState } from "react";
import third from "../assets/third.png";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";
import CompanyCard from "./CompanyCard";

const Company = () => {
  

  return (
    <div className="py-8 w-full">
      <h2 className="text-2xl leading-6 text-white text-center px-4">
        Companys
      </h2>
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white mt-6  text-center">
        Apply for your dream Company
      </h1>
      <div className="lg:flex items-center justify-center mt-12 w-full">
        {/* {filteredData &&
          filteredData.map((item, i) => {
            return <CompanyCard {...item} />;
          })} */}
      </div>
    </div>
  );
};

export default Company;
