import React from 'react';
import Inquire from '../Inquire';
import { FaCode, FaDatabase, FaServer, FaCertificate, FaLaptopCode, FaLayerGroup } from 'react-icons/fa'; // Font Awesome icons

const FullStackMERN = () => {
  return (
    <div>
      <Inquire />
      {/* Header Section */}

      <h1>Full Stack Development (MERN) Course at Cloud Atlas</h1>
      <p>Become a Pro in Full Stack Development with MERN</p>

      {/* Course Includes */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Includes:</h2>
          <ul style={listStyle}>
            <li>
              <FaCode style={iconStyle} /> Hands-on Coding Practice
            </li>
            <li>
              <FaLayerGroup style={iconStyle} /> Frontend and Backend Development
            </li>
            <li>
              <FaDatabase style={iconStyle} /> Database Integration
            </li>
            <li>
              <FaCertificate style={iconStyle} /> Certificate of Completion
            </li>
            <li>
              <FaLaptopCode style={iconStyle} /> Training on MERN Stack (MongoDB, Express, React, Node.js)
            </li>
            <li>
              <FaServer style={iconStyle} /> Deployment and Hosting Guidance
            </li>
          </ul>
        </div>
      </section>

      {/* Course Overview */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Overview</h2>
          <p>
            The Full Stack Development (MERN) Course equips participants with comprehensive skills in building modern, scalable web applications. This course covers frontend development with React, backend development with Node.js and Express, and database management with MongoDB.
          </p>
          <p>
            Participants will work on real-world projects, learning best practices for application architecture, state management, and deployment.
          </p>
        </div>
      </section>

      {/* Why Start a Career in Full Stack Development */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Start a Career in Full Stack Development?</h2>
          <p>
            Full Stack Developers are in high demand, capable of handling both frontend and backend development. With the rise of web applications and the digital economy, this role offers excellent job opportunities and competitive salaries.
          </p>
          <p>
            Full Stack Development skills allow for flexibility, making you a valuable asset in startups, enterprises, and freelancing.
          </p>
        </div>
      </section>

      {/* Who Can Do the Course */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Who Can Do a Full Stack Development Course?</h2>
          <p>
            This course is ideal for aspiring developers, IT professionals, and students who want to build a career in web development. Basic programming knowledge is helpful but not mandatory.
          </p>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Career Opportunities in Full Stack Development</h2>
          <ul>
            <li><strong>Frontend Developer</strong> - Builds user interfaces and ensures a seamless user experience.</li>
            <li><strong>Backend Developer</strong> - Develops server-side logic and database management.</li>
            <li><strong>Full Stack Developer</strong> - Manages both frontend and backend tasks.</li>
            <li><strong>Web Application Developer</strong> - Creates interactive and dynamic web applications.</li>
            <li><strong>DevOps Engineer</strong> - Handles deployment, CI/CD pipelines, and application monitoring.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Cloud Atlas */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Choose Cloud Atlas?</h2>
          <p>
            Cloud Atlas provides comprehensive training in the MERN stack, real-world project experience, and mentorship from industry experts. We focus on hands-on learning to ensure you master the skills needed to succeed.
          </p>
          <p>
            Our career services include mock interviews, portfolio building, and job placement assistance to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Course Outline */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Full Stack Development (MERN) Certification Course Outline</h2>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Sessions:</strong></p>
          <ul>
            <li>Weekdays – 4 per week</li>
            <li>Weekends – 2 per week</li>
          </ul>
          <p><strong>Prerequisites:</strong> Basic programming knowledge is an advantage but not mandatory.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>Frontend Development with React</li>
            <li>Backend Development with Node.js and Express</li>
            <li>Database Management with MongoDB</li>
            <li>State Management with Redux</li>
            <li>Deployment and Hosting</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Inline Styling
const sectionStyle = {
  margin: '20px 0',
};

const sectionContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const iconStyle = {
  marginRight: '10px',
  color: '#007bff',
};

export default FullStackMERN;