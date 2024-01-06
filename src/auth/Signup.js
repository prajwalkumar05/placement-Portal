// StudentDetailsForm.js
import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
  const { signup } = useSignup();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gmailId: "",
    registerNumber: "",
    tenthMarks: "",
    pucMarks: "",
    degreeMarks: "",
    fatherName: "",
    motherName: "",
    address: "",
    course: "",
    batch: "",
    UserID: "",
    password: "",
  });

  const [profile, setProfile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleFile = (e) => {
    const readFile = e.target.files[0];
    setProfile(readFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation for required fields
    const requiredFields = ["name", "age", "gmailId", "registerNumber", "course", "batch", "UserID", "password"];
    const newErrors = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here (e.g., send data to server, validation, etc.)
    console.log("Form Data:", formData);
    signup(
      formData.UserID,
      formData.password,
      formData.name,
      profile,
      formData
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="h-[100%] w-[80%]   m-10 mx-42 p-8  bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Register Student Details</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Each input field */}
          {Object.keys(formData).map((field) => (
            <div key={field} className="flex flex-col mb-4">
              <label
                htmlFor={field}
                className="text-sm font-medium text-gray-600 mb-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`border bg-slate-50 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-700 ${
                  errors[field] ? "border-red-500" : ""
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <label>Profile pic</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFile}
            className="border border-black p-2 rounded-md focus:outline-none focus:border-blue-700"
          />

          <button
            type="submit"
            className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
