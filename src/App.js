import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing shared components
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Inquire from './Inquire';
import About from './About';
import Acourses from './Acourses';

// Importing individual page components
import Home from './pages/Home';
import DataEngineer from './pages/DataEngineer';
import JavaFullstack from './pages/JavaFullstack';
import DataScientist from './pages/DataScientist';
import DataAnalytics from './pages/DataAnalytics';
import AWS from './pages/AWS';

import AllCourses from './pages/AllCourses';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Technologies from './Technologies';
import Features from './Features';
import PoluparCourses from './PoluparCourses';
import SoftwareTesting from './pages/SoftwareTesting';
import FullStackMERN from './pages/FullStackMERN';

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Content Section - Only for the Home page, Hero, Inquire, and About will be added */}
        <main>
          <Routes>
            {/* Main Page - Only Home page will render additional content */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Inquire />
                  <About />
                  <Acourses/>
                  <Technologies/>
                  <Features/>
                  <PoluparCourses/>
                  <Home />
                </>
              }
            />
            {/* Other Routes - Render specific page content */}
            <Route path="/data-engineer" element={<DataEngineer />} />
            <Route path="/java-fullstack" element={<JavaFullstack />} />
            <Route path="/data-scientist" element={<DataScientist />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/software-testing" element={<SoftwareTesting />} />
            <Route path="/full-stack-mern" element={<FullStackMERN />} />
            <Route path="/aws" element={<AWS />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer is always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
