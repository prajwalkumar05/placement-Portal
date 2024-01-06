import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard";
import { useCollection } from "../hooks/useCollection";

const Jobs = () => {
  const { document } = useCollection("companys");
  console.log(document);

  const [data, setData] = useState([]);
  const [filterLocation, setFilterLocation] = useState(null);
  const [filterRole, setfilterRole] = useState(null);

  console.log(data);

  useEffect(() => {
    if (document) {
      setData(document);
    }
  }, [document]);

  const filterByLocation = (location) => {
    if (!document) {
      return;
    }

    const filteredData = document.filter((item) => item.location === location);
    setData(filteredData);
    setFilterLocation(location);
  };

  const filterByRole = (role) => {
    if (!document) {
      return;
    }

    const filteredData = document.filter((item) => item.role === role);
    setData(filteredData);
    setfilterRole(role);
  };

  console.log("software developer" === "software developer");

  const resetFilter = () => {
    setData(document || []);
    // setFilterLocation(null);
  };

  return (
    <div className="py-8 w-full">
      <h2 className="text-2xl leading-6 text-white text-center px-4">
        Companys
      </h2>
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-white mt-6  text-center">
        Apply for your dream Company
      </h1>
      <div className="flex">
      <div className="p-6 my-4 ml-40">
        <select
          className="bg-white p-1"
          onChange={(e) => filterByLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {(document || []).map((item) => (
            <option key={item.id} value={item.location}>
              {item.location}
            </option>
          ))}
        </select>
      </div>

      <div className="p-6 my-4 ml-40">
        <select
          className="bg-white p-1"
          onChange={(e) => filterByRole(e.target.value)}
        >
          <option value="">Select Role</option>
          {(document || []).map((item) => (
            <option key={item.id} value={item.role}>
              {item.role}
            </option>
          ))}
        </select>

        
      </div>

      <button onClick={resetFilter}>Reset Filter</button>
      </div>
      <div className="lg:flex items-center justify-center mt-12 w-full flex-wrap gap-10">
        {data &&
          data.map((item, i) => {
            return <CompanyCard key={i} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Jobs;
