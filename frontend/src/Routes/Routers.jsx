import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Homepage/Home";
import Services from "../pages/ServicesPage/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contactpage/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails";
// import NotFound from "../pages/NotFound/NotFound"; // Create a NotFound component

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctorsdetails" element={<DoctorsDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Routers;
