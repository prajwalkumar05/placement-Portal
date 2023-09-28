import React from "react";
import Card from "./Card";

const Hero = () => {
  const arr = [
    { logo: "image", id: "1", name: "Home",to:"Home" },
    { logo: "image", id: "2", name: "jobs",to:"jobs" },
    { logo: "image", id: "3", name: "result",to:"result" },
    { logo: "image", id: "4", name: "setting",to:"setting" },
    { logo: "image", id: "5", name: "rules",to:"rules" },
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
      <div className="sm:flex justify-center mt-[-130px] flex-wrap h-full ">
        {arr.map((item,i) => {
          return <Card {...item} key={i}  />;
        })}
      </div>
    </div>
  );
};

export default Hero;
