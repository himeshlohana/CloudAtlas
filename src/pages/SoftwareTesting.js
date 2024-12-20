import React from 'react';
import Inquire from '../Inquire';
import { FaBug, FaLaptopCode, FaTasks, FaCertificate, FaToolbox, FaClipboardCheck } from 'react-icons/fa'; // Font Awesome icons

const SoftwareTesting = () => {
  return (
    <div>
      <Inquire />
      {/* Header Section */}

      <h1>Software Testing Course at Cloud Atlas</h1>
      <p>Master the Art of Ensuring Software Quality</p>

      {/* Course Includes */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Includes:</h2>
          <ul style={listStyle}>
            <li>
              <FaBug style={iconStyle} /> Hands-on Bug Detection
            </li>
            <li>
              <FaTasks style={iconStyle} /> Practical Assignments
            </li>
            <li>
              <FaLaptopCode style={iconStyle} /> Lifetime Access to Resources
            </li>
            <li>
              <FaCertificate style={iconStyle} /> Certificate of Completion
            </li>
            <li>
              <FaToolbox style={iconStyle} /> Training on Advanced Tools (Selenium, JIRA, etc.)
            </li>
            <li>
              <FaClipboardCheck style={iconStyle} /> 100% Placement Assistance
            </li>
          </ul>
        </div>
      </section>

      {/* Course Overview */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Overview</h2>
          <p>
            The Software Testing Course equips participants with the skills required to ensure the quality, functionality, and reliability of software products. With a hands-on approach, this course covers manual testing, automation tools, and debugging techniques.
          </p>
          <p>
            You'll learn to use industry-standard tools like Selenium, JIRA, and Postman to create effective test cases, execute scripts, and report bugs. This course prepares you to tackle real-world challenges and excel in your career.
          </p>
        </div>
      </section>

      {/* Why Start a Career in Software Testing */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Start a Career in Software Testing?</h2>
          <p>
            Software Testing is a critical part of the software development lifecycle, ensuring high-quality product delivery. With the increasing demand for reliable software, testing professionals are in high demand across industries.
          </p>
          <p>
            This career path offers a blend of technical and analytical challenges, competitive salaries, and opportunities for growth into roles like QA Lead or Test Manager.
          </p>
        </div>
      </section>

      {/* Who Can Do the Course */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Who Can Do a Software Testing Course?</h2>
          <p>
            This course is suitable for aspiring testers, developers, and IT professionals seeking to enhance their skills in software quality assurance. No prior experience is required; basic computer knowledge will be helpful.
          </p>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Career Opportunities in Software Testing</h2>
          <ul>
            <li><strong>Manual Tester</strong> - Executes test cases to identify software issues.</li>
            <li><strong>Automation Tester</strong> - Develops automated scripts for testing processes.</li>
            <li><strong>Performance Tester</strong> - Ensures system performance under various conditions.</li>
            <li><strong>Quality Analyst</strong> - Monitors quality metrics and ensures standards are met.</li>
            <li><strong>Test Manager</strong> - Leads testing teams and manages testing processes.</li>
            <li><strong>Security Tester</strong> - Identifies vulnerabilities and ensures software security.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Cloud Atlas */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Choose Cloud Atlas?</h2>
          <p>
            At Cloud Atlas, we provide comprehensive training on manual and automation testing tools, real-world projects, and mock interview preparation. Our experienced trainers ensure you gain both practical skills and theoretical knowledge.
          </p>
          <p>
            From Selenium to JIRA, we cover everything you need to excel as a testing professional, along with career services to help you secure your dream job.
          </p>
        </div>
      </section>

      {/* Course Outline */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Software Testing Certification Course Outline</h2>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Sessions:</strong></p>
          <ul>
            <li>Weekdays – 4 per week</li>
            <li>Weekends – 2 per week</li>
          </ul>
          <p><strong>Prerequisites:</strong> No prerequisites. Basic computer knowledge is an advantage.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>Manual Testing</li>
            <li>Automation Testing (Selenium)</li>
            <li>Bug Tracking Tools (JIRA)</li>
            <li>API Testing (Postman)</li>
            <li>Performance Testing</li>
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

export default SoftwareTesting;
