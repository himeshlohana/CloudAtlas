import React from 'react';

const About = () => {
  return (
    <div className="content-container">
      <h2 className="main-title">The Best Software Training Institute!</h2>

      <p>
        Increase your Market Value and Employability with Cloud Atlas' Job-Oriented Courses! 
        Welcome to Cloud Atlas Software Training Institute, your premier destination for mastering the world of software. 
        Embark on a transformative journey with our comprehensive range of job-oriented software courses, meticulously crafted to equip both beginners and seasoned professionals with the technical and professional skills essential for success in today's rapidly evolving industry.
      </p>

      <p>
        Whether you're diving into coding or exploring the intricacies of data science, our expertly designed curriculum ensures you stay ahead in the dynamic tech landscape. Join us and unlock your potential in the digital age.
      </p>

      <h3>Why Choose Cloud Atlas?</h3>
      <ul>
        <li><strong>Expert Trainers:</strong> Industry professionals delivering cutting-edge IT training.</li>
        <li><strong>Life Time Support:</strong> Ongoing assistance and resources for continuous growth.</li>
        <li><strong>Flexible Batches:</strong> Customized batch schedules to suit your availability.</li>
        <li><strong>Interview Preparation:</strong> Comprehensive preparation for IT job interviews.</li>
        <li><strong>100% Placement Assistance:</strong> Job Assistance and Unlimited Scheduled Interviews.</li>
        <li><strong>Live Projects:</strong> Hands-on experience through live, real-world projects.</li>
      </ul>

      {/* New Section - Achieve Your Goals with IT */}
      <section className="achieve-goals">
        <h2>Achieve Your Goals with IT</h2>

        <div className="achieve-content">
          <div className="achieve-item">
            <h3>Expert Trainers</h3>
            <p>
              Our industry expert trainers deliver cutting-edge IT training with hands-on, tailored instruction to ensure practical skill development and deep understanding.
            </p>
          </div>

          <div className="achieve-item">
            <h3>Life Time Support</h3>
            <p>
              We offer lifetime support, providing ongoing assistance and resources to ensure your continuous growth and success in the IT field.
            </p>
          </div>

          <div className="achieve-item">
            <h3>Flexible Batches</h3>
            <p>
              We offer flexible batch schedules to fit your availability, ensuring convenient and personalized learning experiences.
            </p>
          </div>

          <div className="achieve-item">
            <h3>Interview Preparation</h3>
            <p>
              We provide comprehensive interview preparation, equipping you with the skills and confidence needed to excel in your IT job interviews.
            </p>
          </div>

          <div className="achieve-item">
            <h3>100% Placement Assistance</h3>
            <p>
              After completion of training, we provide Job Assistance, Scheduled Unlimited Interviews for every student.
            </p>
          </div>

          <div className="achieve-item">
            <h3>Live Projects</h3>
            <p>
              The course includes a live project, providing hands-on experience with real-world applications. Students collaborate to solve practical problems, integrating theoretical knowledge with practical skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
