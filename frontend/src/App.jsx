import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'; // <-- මෙහෙම import කරන්න
import Home from './pages/Home'; // <-- Home component එක import කරන්න
import Appointment from './pages/Appointment';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
// ...existing code...


const App = () => {
  const newLocal = <Route path="/myprofile" element={<MyProfile />} />;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
               <Route path="/doctors" element={<Doctors />} />
                  <Route path="/login" element={<Login />} />
         <Route path="/myappointments" element={<MyAppointments />} />
          {newLocal}
      </Routes>
    </div>
  );
};

export default App;