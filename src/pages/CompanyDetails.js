import React, { useState } from "react";

const CompanyDetails = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-4">React.js Developer</h1>
          <p className="text-gray-600 mb-4">Company Name</p>
          <p className="text-gray-600 mb-6">Location: [Location] | Type: [Full-time/Part-time/Contract]</p>
  
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Job Description:</h2>
            <p className="text-gray-800">
              [Company Name] is seeking a talented React.js Developer to join our dynamic team.
              The ideal candidate should have a strong passion for web development and be proficient
              in React.js, JavaScript, and related technologies...
            </p>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Key Responsibilities:</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Develop new user-facing features using React.js</li>
              <li>Build reusable components and front-end libraries for future use</li>
              {/* Add more responsibilities as needed */}
            </ul>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Requirements:</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
              <li>Thorough understanding of React.js and its core principles</li>
              {/* Add more requirements as needed */}
            </ul>
          </div>
  
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Benefits:</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Competitive salary</li>
              <li>Health, dental, and vision insurance</li>
              {/* Add more benefits as needed */}
            </ul>
          </div>
  
          <div>
            <h2 className="text-xl font-bold mb-2">How to Apply:</h2>
            <p className="text-gray-800">
              To apply for this position, please send your resume and portfolio to{' '}
              <a href="mailto:email@example.com" className="text-blue-500 hover:underline">email@example.com</a> with the subject line "React.js Developer Application - [Your Full Name]."
            </p>
          </div>
        </div>
      </div>
    );
};

export default CompanyDetails;
