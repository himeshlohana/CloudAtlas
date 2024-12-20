import React from 'react'
import Inquire from '../Inquire';

const AllCourses = () => {
  return (
    <>
      
    <div>
    <Inquire/>
    <section id="courses" className="courses">
   
 
   
 
   <h3>Job Oriented Courses</h3>
   <div className="course-list">
    <a href='./data-engineer'>
     <div   className=" course">
       <h4> Data Engineer Course</h4>
       <p>Learn Data Engineer with 100% Placement Assistance.</p>
       <span>6 Months | Hybrid</span>
     </div>
    </a>
    <a href='./java-fullstack'>
     <div className="course">
       <h4>Fullstack Java Course</h4>
       <p>Master Java technology and get placed as a Fullstack Java Developer.</p>
       <span>8 Months | Hybrid</span>
     </div>
     </a>
     <a href='./data-analytics'>
     <div className="course">
       <h4>Data Analytics Course</h4>
       <p>Learn Tableau and Power BI to enter the exciting world of data analytics.</p>
       <span>6 Months | Hybrid</span>
     </div></a>
     <a href='./data-scientist'>
     <div className="course">
       <h4>Data Scientist</h4>
       <p>Master Data Scientist with 100% Placement Assistance


       </p>
       <span>3 Months | Hybrid</span>
     </div>
     </a>

      
     <a href='./aws'>
     <div className="course">
       <h4>Amazon Web Services (AWS)</h4>
       <p>Enter the cloud industry with AWS and get 100% Placement Assistance.</p>
       <span>2 Months | Hybrid</span>
     </div>
     </a>

     <a href='./software-testing'>
       <div className="course">
         <h4>Software Testing Course</h4>
         <p>Learn Manual and Automation Testing from our Industry experts.

</p>
         <span>5 Months | Hybrid</span>
       </div>
       </a>

       <a href='./full-stack-mern'>
       <div className="course">
         <h4>Fullstack in MERN</h4>
         <p> Become a Fullstack MERN Developer with our 100% Placement Assistance.
</p>
         <span>3 Months | Hybrid</span>
       </div>
       </a>


   </div>
  </section>   
     </div>
    </>
  )
}

export default AllCourses
