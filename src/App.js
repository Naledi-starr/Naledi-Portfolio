import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';

const Home = () => (
  <>
    <Hero />
    {/* Other sections like Services, Portfolio, About Me, Blog, Contact will be added here */}
  </>
);

const Services = () => <div>Services Page - Coming Soon</div>;
const Portfolio = () => <div>Portfolio Page - Coming Soon</div>;
const About = () => <div>About Me Page - Coming Soon</div>;
const Blog = () => <div>Blog Page - Coming Soon</div>;
const Contact = () => <div>Contact Page - Coming Soon</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
