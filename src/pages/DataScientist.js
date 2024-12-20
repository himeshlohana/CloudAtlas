import React from 'react'
import { FaProjectDiagram, FaFileAlt, FaClock, FaCertificate, FaGraduationCap, FaHandshake } from 'react-icons/fa';  // Font Awesome icons
import Inquire from '../Inquire';
const DataScientist = () => {
  return (
    <div>
      <Inquire/>
      {/* Header Section */}
         <h1>Data Scientist Course at Cloud Atlas</h1>
        <p>Transform your career with Data Science and become an expert in Machine Learning and AI</p>
   

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
            The Data Scientist Course at Cloud Atlas is designed for aspiring data scientists who want to harness the power of data to solve complex business problems. Through a combination of machine learning, statistics, and data analysis techniques, students will learn how to extract valuable insights from large datasets.
          </p>
          <p>
            Students will be introduced to essential tools like **Python**, **R**, **SQL**, and **Machine Learning frameworks** to prepare them for real-world challenges. By the end of the course, learners will have the skills to build predictive models, analyze data, and communicate findings effectively to support decision-making.
          </p>
        </div>
      </section>

      {/* Why Data Science is Important */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Data Science is Important?</h2>
          <ul>
            <li>Data Science enables businesses to make data-driven decisions.</li>
            <li>Machine Learning and AI algorithms help predict future trends and behaviors.</li>
            <li>Data Science can automate processes and provide deeper insights from data.</li>
            <li>Data scientists are crucial in handling and interpreting large datasets that traditional methods cannot manage.</li>
            <li>Data Science is integral to sectors like healthcare, finance, marketing, and e-commerce.</li>
          </ul>
        </div>
      </section>

      {/* Is Data Science a Good Career Choice? */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Is Data Science a Good Career Choice?</h2>
          <ul>
            <li>Data Science has one of the highest-paying salaries in the tech industry.</li>
            <li>Data scientists are in high demand across many sectors, including healthcare, finance, technology, and retail.</li>
            <li>The role provides opportunities to work on cutting-edge technologies like AI, deep learning, and big data.</li>
            <li>As businesses continue to rely more on data, the demand for skilled data scientists is only expected to grow.</li>
            <li>Data science offers great job security and career growth opportunities, with the ability to transition into roles like data engineer, machine learning engineer, or business analyst.</li>
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
          <p><strong>Prerequisites:</strong> No prerequisites, though a basic understanding of programming or statistics is helpful.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>Introduction to Data Science and Data Analytics</li>
            <li>Python Programming for Data Science</li>
            <li>Statistical Analysis and Probability</li>
            <li>Data Wrangling and Preprocessing</li>
            <li>Machine Learning Algorithms (Supervised and Unsupervised)</li>
            <li>Deep Learning and Neural Networks</li>
            <li>Data Visualization with Python (Matplotlib, Seaborn)</li>
            <li>Big Data Technologies (Hadoop, Spark)</li>
            <li>Natural Language Processing (NLP)</li>
            <li>SQL for Data Analysis</li>
            <li>Model Evaluation and Hyperparameter Tuning</li>
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
  textAlign: 'left',
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

export default DataScientist
