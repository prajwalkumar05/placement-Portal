// src/components/Resume.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Test = () => {
  const [education, setEducation] = useState({
    university: '',
    degree: '',
    graduationYear: '',
  });

  const [educationList, setEducationList] = useState([]);
  const [skills, setSkills] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [achievements, setAchievements] = useState('');
  const [achievementsList, setAchievementsList] = useState([]);
  const [projects, setProjects] = useState('');
  const [projectsList, setProjectsList] = useState([]);

  const handleAddEducation = () => {
    setEducationList((prevList) => [...prevList, education]);
    setEducation({ university: '', degree: '', graduationYear: '' });
  };

  const handleAddSkills = () => {
    setSkillsList((prevList) => [...prevList, skills]);
    setSkills('');
  };

  const handleAddAchievements = () => {
    setAchievementsList((prevList) => [...prevList, achievements]);
    setAchievements('');
  };

  const handleAddProjects = () => {
    setProjectsList((prevList) => [...prevList, projects]);
    setProjects('');
  };

  const downloadResumePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Resume', 20, 10);
    pdf.autoTable({
      startY: 20,
      head: [['Section', 'Details']],
      body: [
        ['Name',"Prajwal Kumar"],
        ['Education', educationList.map((edu) => `${edu.university}, ${edu.degree} (${edu.graduationYear})`).join('\n')],
        ['Skills', skillsList.join(', ')],
        ['Achievements', achievementsList.join('\n')],
        ['Projects', projectsList.join('\n')],
      ],
    });
    pdf.save('resume.pdf');
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Side - Input Form */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Enter Information</h1>

        {/* Education Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="university"
              placeholder="University"
              value={education.university}
              onChange={(e) => setEducation({ ...education, university: e.target.value })}
              className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={education.degree}
              onChange={(e) => setEducation({ ...education, degree: e.target.value })}
              className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              name="graduationYear"
              placeholder="Graduation Year"
              value={education.graduationYear}
              onChange={(e) => setEducation({ ...education, graduationYear: e.target.value })}
              className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            onClick={handleAddEducation}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Education
          </button>
        </div>

        {/* Skills Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <input
            type="text"
            placeholder="Enter a skill"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleAddSkills}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Skill
          </button>
        </div>

        {/* Achievements Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Achievements</h2>
          <input
            type="text"
            placeholder="Enter an achievement"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleAddAchievements}
            className="mt-2 bg-blue-500             text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Achievement
            </button>
          </div>
  
          {/* Projects Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <input
              type="text"
              placeholder="Enter a project"
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              className="p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              onClick={handleAddProjects}
              className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Project
            </button>
          </div>
        </div>
  
        {/* Right Side - Display Resume */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
  
          {/* Display Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            {educationList.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="text-lg font-semibold">{edu.university}</p>
                <p className="text-gray-600">{`${edu.degree} - ${edu.graduationYear}`}</p>
              </div>
            ))}
          </section>
  
          {/* Display Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Skills</h2>
            {skillsList.map((skill, index) => (
              <div key={index} className="mb-2">
                <p className="text-lg text-black">{skill}</p>
              </div>
            ))}
          </section>
  
          {/* Display Achievements Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2 ">Achievements</h2>
            {achievementsList.map((achievement, index) => (
              <div key={index} className="mb-2">
                <p className="text-lg text-black">{achievement}</p>
              </div>
            ))}
          </section>
  
          {/* Display Projects Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            {projectsList.map((project, index) => (
              <div key={index} className="mb-2">
                <p className="text-lg text-black">{project}</p>
              </div>
            ))}
          </section>
  
          {/* Download Button for PDF */}
          <button
            onClick={downloadResumePDF}
            className="mt-8 bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          >
            Download Resume (PDF)
          </button>
        </div>
      </div>
    );
  };
  
  export default Test;
  
