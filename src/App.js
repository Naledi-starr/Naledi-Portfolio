import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import ServicesPage from './pages/Services';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import SoftSkills from './components/SoftSkills';
import RelevantExperience from './components/RelevantExperience';
import Education from './components/Education'; 
import BackToTopButton from './components/BackToTopButton';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Preloader from './components/Preloader';

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <TechStack />
    <SoftSkills />
    <Services />
    <RelevantExperience />
    <Education />
    <CallToAction />
    <BlogPage/>
  </>
);

//const About = () => <div>About Me Page - Coming Soon</div>;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for the initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </Router>
  );
}

export default App;
