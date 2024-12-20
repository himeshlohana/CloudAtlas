import React from 'react';
import { FaProjectDiagram, FaFileAlt, FaClock, FaCertificate, FaGraduationCap, FaHandshake } from 'react-icons/fa';  // Font Awesome icons
import Inquire from '../Inquire';
function DataEngineer() {
 
  return (
    <div>
      <Inquire/>
      {/* Header Section */}
     
        <h1>Data Engineering Course at Cloud Atlas</h1>
        <p>Launch your career in Data Engineering with Cloud Atlas</p>
 
      {/* Course Includes */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Includes:</h2>
          <ul style={listStyle}>
            <li>
              <FaProjectDiagram style={iconStyle} /> Projects
            </li>
            <li>
              <FaFileAlt style={iconStyle} /> Assignments
            </li>
            <li>
              <FaClock style={iconStyle} /> Lifetime Access
            </li>
            <li>
              <FaCertificate style={iconStyle} /> Certificate (Course Completion)
            </li>
            <li>
              <FaGraduationCap style={iconStyle} /> Interview Preparation (DSA and Soft Skills Training)
            </li>
            <li>
              <FaHandshake style={iconStyle} /> 100% Placement Assistance
            </li>
          </ul>
        </div>
      </section>

      {/* Course Overview */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Overview</h2>
          <p>
            The Data Engineering Course at Cloud Atlas provides in-depth training for aspiring data engineers. Data engineers play a crucial role in managing and optimizing data pipelines, storage systems, and infrastructure required for big data analytics. This course offers both theoretical knowledge and practical sessions to prepare students for real-world challenges.
          </p>
          <p>
            You will learn essential tools and technologies like **SQL**, **Python**, **Hadoop**, and **Spark** to manage data pipelines, integrate systems, and build scalable data architectures. Data engineers ensure that the data is accessible, reliable, and scalable for data scientists and analysts.
          </p>
        </div>
      </section>

      {/* Why Data Engineering is Required */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Data Engineering is Required?</h2>
          <ul>
            <li>To build and maintain scalable data pipelines.</li>
            <li>To ensure data integrity and consistency across various systems.</li>
            <li>To create efficient storage and retrieval mechanisms for large datasets.</li>
            <li>To provide high-quality data for analysis and decision-making in organizations.</li>
            <li>To work with distributed computing frameworks like Hadoop and Spark.</li>
          </ul>
        </div>
      </section>

      {/* Is Data Engineering a Good Career Choice? */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Is Data Engineering a Good Career Choice?</h2>
          <ul>
            <li>High demand for skilled data engineers across industries.</li>
            <li>Competitive salaries due to the critical role of data engineers in managing data infrastructure.</li>
            <li>Opportunities to work with cutting-edge technologies like Hadoop, Spark, and cloud platforms.</li>
            <li>Good growth prospects as data-driven decision-making becomes more important in businesses.</li>
            <li>Data engineering is foundational to data science, ensuring that data is processed and prepared for analysis.</li>
            <li>Excellent opportunities for career advancement and specialization in big data technologies.</li>
          </ul>
        </div>
      </section>

      {/* Course Outline */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Course Outline</h2>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Sessions:</strong></p>
          <ul>
            <li>Weekdays – 4 per week</li>
            <li>Weekends – 2 per week</li>
          </ul>
          <p><strong>Prerequisites:</strong> No prerequisites, though basic knowledge of programming or databases is an advantage.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>SQL and Database Management</li>
            <li>Python for Data Engineering</li>
            <li>Big Data Technologies (Hadoop, Spark)</li>
            <li>Data Warehousing and ETL Processes</li>
            <li>Cloud Platforms (AWS, Azure, GCP)</li>
            <li>Data Pipeline Architecture</li>
            <li>Data Integration and APIs</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

// Inline Styling
const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
};

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

export default DataEngineer;
