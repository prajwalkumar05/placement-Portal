import React from 'react'
import Company from '../components/Company'

const Home = () => {
    const arr = [
        { logo: "image", id: "1", name: "Home",to:"Home" },
        { logo: "image", id: "2", name: "jobs",to:"jobs" },
        { logo: "image", id: "3", name: "result",to:"result" },
        { logo: "image", id: "4", name: "setting",to:"setting" },
        { logo: "image", id: "5", name: "rules",to:"rules" },
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