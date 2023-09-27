import React from "react";
import Card from "./Card";

const Hero = () => {
  const arr = [
    { logo: "image", id: "1", name: "value" },
    { logo: "image", id: "1", name: "value" },
    { logo: "image", id: "1", name: "value" },
    { logo: "image", id: "1", name: "value" },
    { logo: "image", id: "1", name: "value" },
  ];

  return (
    <div>
      <div className="  h-[45vh] bg-gradient-to-r from-cyan-700 to-blue-300">
        <div className=" text-center text-neutral-content flex justify-center items-start pt-6">
          <div className="max-w-md text-white">
            <h1 className="mb-3 text-4xl font-bold">Hello prajwal,</h1>
            <h1 className="mb-5 text-2xl font-medium">
              Welcome To the Mishra Hotel{" "}
            </h1>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="flex absolute top-[40%] left-[7%]">
        {arr.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
};

export default Hero;
