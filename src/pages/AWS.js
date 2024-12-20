import React from 'react';
import Inquire from '../Inquire';
import { FaProjectDiagram, FaFileAlt, FaClock, FaCertificate, FaGraduationCap, FaHandshake } from 'react-icons/fa';  // Font Awesome icons

const AWS = () => {
  return (
    <div>
      <Inquire />

      {/* Header Section */}
      <h1>AWS Certification Course at Cloud Atlas</h1>
      <p>Master Cloud Computing with AWS and Enhance Your Career</p>

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
            The AWS Certification Course at Cloud Atlas provides a comprehensive understanding of Amazon Web Services, focusing on real-world applications in cloud computing. Participants will explore a range of services, including EC2, S3, RDS, Lambda, and more.
          </p>
          <p>
            With hands-on labs, this course will equip you with the skills to deploy, manage, and scale cloud-based applications on AWS. The course will focus on critical concepts such as cloud architecture, security, and best practices.
          </p>
        </div>
      </section>

      {/* Why Start a Career in Cloud Computing with AWS? */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Start a Career in Cloud Computing with AWS?</h2>
          <p>
            Cloud computing is one of the fastest-growing fields in the IT industry, with AWS being the leader in the market. AWS skills are highly in demand, offering great job security, career growth, and competitive salaries.
          </p>
          <p>
            As businesses move to the cloud, AWS professionals are needed to manage, scale, and optimize their infrastructure. This course will help you build expertise in cloud computing, making you job-ready for roles in cloud engineering and architecture.
          </p>
        </div>
      </section>

      {/* Who Can Do the AWS Course? */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Who Can Do the AWS Course?</h2>
          <p>
            This course is ideal for beginners looking to enter cloud computing or IT professionals seeking to expand their knowledge of AWS. It’s also suitable for system administrators, network engineers, and developers aiming to build cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Career Opportunities */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Career Opportunities with AWS Certification</h2>
          <ul>
            <li><strong>AWS Cloud Architect</strong> - Designs and implements scalable cloud solutions using AWS services.</li>
            <li><strong>AWS Cloud Engineer</strong> - Deploys, manages, and monitors cloud infrastructure.</li>
            <li><strong>Cloud Developer</strong> - Develops applications and services on AWS platforms.</li>
            <li><strong>AWS Solutions Architect</strong> - Creates scalable, reliable, and secure cloud solutions.</li>
            <li><strong>Cloud Consultant</strong> - Provides expertise and recommendations on AWS-based cloud strategies.</li>
            <li><strong>DevOps Engineer</strong> - Automates cloud infrastructure and deployment processes.</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Cloud Atlas for AWS Training? */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>Why Choose Cloud Atlas for AWS Training?</h2>
          <p>
            Cloud Atlas offers an AWS certification course that covers all key AWS services and prepares you for the AWS Certified Solutions Architect exam. Learn from industry experts who provide practical insights and hands-on experience to help you succeed.
          </p>
          <p>
            We provide mock interviews, career services, and soft skills training to ensure you are job-ready. Our course focuses on the real-world applications of AWS and will equip you with the knowledge to excel in cloud computing.
          </p>
        </div>
      </section>

      {/* AWS Course Outline */}
      <section style={sectionStyle}>
        <div style={sectionContentStyle}>
          <h2>AWS Certification Course Outline</h2>
          <p><strong>Duration:</strong> 6 months</p>
          <p><strong>Sessions:</strong></p>
          <ul>
            <li>Weekdays – 4 per week</li>
            <li>Weekends – 2 per week</li>
          </ul>
          <p><strong>Prerequisites:</strong> Basic computer knowledge is an advantage. No prior AWS experience is required.</p>
          <p><strong>Topics Covered:</strong></p>
          <ul>
            <li>Introduction to Cloud Computing</li>
            <li>AWS Core Services (EC2, S3, RDS, Lambda, etc.)</li>
            <li>Networking and Security on AWS</li>
            <li>Elastic Load Balancing and Auto Scaling</li>
            <li>Database Services on AWS</li>
            <li>Cost Management on AWS</li>
            <li>Deployment and Monitoring of Cloud Applications</li>
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

export default AWS;
