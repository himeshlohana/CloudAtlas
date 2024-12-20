import React from 'react'
import Inquire from '../Inquire';
import { FaProjectDiagram, FaFileAlt, FaClock, FaCertificate, FaGraduationCap, FaHandshake } from 'react-icons/fa';  // Font Awesome icons
const DataAnalytics = () => {
  return (
    <div>
        <Inquire/>
      {/* Header Section */}
      
        <h1>Data Analytics Course at Cloud Atlas</h1>
        <p>Unlock Your Career in Data Analytics</p>
       

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
              <FaGraduationCap style={iconStyle} /> Interview Preparation (DSA and Soft Skills training)
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
            A Data Analytics Course offers a hands-on approach to mastering the art of data interpretation, focusing on real-world applications and business-driven insights. Participants dive into a variety of modules, learning advanced tools like Python, R, SQL, and Excel.
          </p>
          <p>
            What sets this course apart is its emphasis on exploratory data analysis, statistical modeling, and data visualization, ensuring that students can extract and communicate valuable insights across industries.
          </p>
          <p>
            Graduates are empowered to leverage data to identify patterns, optimize operations, and predict trends.
          </p>
        </div>
      </section>

      {/* Why Start a Career in Data Analytics */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Start a Career in Data Analytics?</h2>
          <p>
            Data analytics offers a wealth of opportunities as industries like finance, healthcare, technology, and marketing increasingly rely on data-driven strategies. A career in data analytics ensures impressive job security and competitive salaries.
          </p>
          <p>
            Data analytics skills are versatile and can be applied across a broad range of industries, from business intelligence to data science, providing job stability and career growth.
          </p>
        </div>
      </section>

      {/* Who Can Do the Course */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Who Can Do a Data Analytics Course?</h2>
          <p>
            This course is designed for individuals from various backgrounds—beginners, professionals seeking a career change, or even business managers and entrepreneurs. You don’t need any prior experience to start; basic computer knowledge is an advantage.
          </p>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Career Opportunities for Data Analysts</h2>
          <ul>
            <li><strong>Business Intelligence Analyst</strong> - Analyzes business data for strategic insights.</li>
            <li><strong>Data Scientist</strong> - Builds predictive models and delivers actionable business insights.</li>
            <li><strong>Data Engineer</strong> - Designs and manages data pipelines.</li>
            <li><strong>Financial Analyst</strong> - Analyzes financial data for investment decisions.</li>
            <li><strong>Market Research Analyst</strong> - Analyzes market trends and consumer behavior.</li>
            <li><strong>Healthcare Data Analyst</strong> - Improves patient outcomes through data analysis.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Cloud Atlas */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Choose Cloud Atlas?</h2>
          <p>
            Choosing Cloud Atlas's data analytics course gives you the advantage of mastering industry-leading tools like Tableau, Power BI, Advanced Excel, and Python programming. These skills are critical for tasks like data visualization, statistical analysis, and automating data processes.
          </p>
          <p>
            We also provide real-world applications through case studies, career services like mock interviews, and soft skills training to ensure your success.
          </p>
        </div>
      </section>

      {/* Course Outline */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Data Analytics Certification Course Outline</h2>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Sessions:</strong></p>
          <ul>
            <li>Weekdays – 4 per week</li>
            <li>Weekends – 2 per week</li>
          </ul>
          <p><strong>Prerequisites:</strong> No prerequisites. Basic computer knowledge is an advantage.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>Database</li>
            <li>Python</li>
            <li>Advanced Excel</li>
            <li>Tableau</li>
            <li>PowerBI</li>
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
  paddingLeft:'30px',
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

export default DataAnalytics
