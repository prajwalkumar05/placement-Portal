// MultiStepForm.js
import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const nextStep = () => {
    // Basic validation for Step 1
    if (formData.name.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const submitForm = () => {
    // Basic validation for Step 3
    if (formData.password.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    } else {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <h1 className="text-3xl font-bold mb-6">Step 1</h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
            <button
              onClick={nextStep}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="step">
            <h1 className="text-3xl font-bold mb-6">Step 2</h1>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="text-gray-500 px-6 py-2 rounded hover:text-gray-700 focus:outline-none"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step">
            <h1 className="text-3xl font-bold mb-6">Step 3</h1>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            />
            {errors.password && <p className="text-red-500 mb-2">{errors.password}</p>}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="text-gray-500 px-6 py-2 rounded hover:text-gray-700 focus:outline-none"
              >
                Previous
              </button>
              <button
                onClick={submitForm}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-lg">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
