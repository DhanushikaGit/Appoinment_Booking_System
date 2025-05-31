import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Appointment from './pages/Appointment';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/doctor/:docId" element={<Appointment />} /> {/* Added route for doctor details */}
        <Route path="/login" element={<Login />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;