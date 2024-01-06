import React from 'react'
import Company from '../components/Company'
import Dashboard from './Dashboard';

const Home = () => {
    const arr = [
        { logo: "image", id: "1", name: "Home",to:"Home" },
        { logo: "image", id: "2", name: "Jobs",to:"jobs" },
        { logo: "image", id: "3", name: "Result",to:"result" },
        { logo: "image", id: "4", name: "Setting",to:"setting" },
        { logo: "image", id: "5", name: "Rules",to:"rules" },
      ];
  return (
    <div>
        {arr.map((item) =>{
           return <Company  />
        })}
        
    </div>
  )
}

export default Home