import React from 'react'
import { useState } from 'react';

const PlacedStudents = ({placedStu}) => {

    




  

    if (placedStu && placedStu.length === 0) {
      return(
        <div className="max-w mx-28 mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Result Comming Soon...</h2>
        </div>
      ) 
    }

 




  return (
    <div className="max-w mx-28 mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Placed  Students</h2>

      
      <ul>
        {placedStu &&
          placedStu.map((student) => (
            <li
              key={student.id}
              className="flex justify-between p-3 bg-gray-100 rounded mb-2"
            >
              <span>
                {student.registerNumber}{" "}
                <span className="mx-8 font-medium">{student.name}</span>
              </span>

              
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PlacedStudents