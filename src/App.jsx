import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Student from './pages/Employee/Student';
// import Employees from './pages/Employee/Employees';
import Emp from './pages/Employee/Emp';
// import AddNewEmployee from './pages/Employee/AddNewEmployee';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/employees" element={<Employees/>}/> */}
        <Route path="/emp" element={<Emp/>}/>
        <Route path="/student" element={<Student/>}/>
        {/* <Route path="/addnewemployee" element={<AddNewEmployee/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
