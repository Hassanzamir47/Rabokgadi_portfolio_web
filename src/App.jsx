// import {
//   Footer,
//   Navbar,
//   CTA,
//   Services,
//   AboutUs,
// } from './components'

// const App = () => (
//   <div
//     className="w-full overflow-hidden"
//   >
//   <Navbar />
//   <AboutUs />
//   <CTA/>
//   <Services/>
//   <Footer/>

   
//   </div>
// )

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CTA from './components/CTA';
import Services from './components/Services';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import Hero  from './components/Hero';

const App = () => (
  <Router>
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route path="/why-us" element={<CTA />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />

      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
