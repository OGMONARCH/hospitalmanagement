import Home from "../pages/Homepage/Home";
import Services from "../pages/ServicesPage/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Contactpage/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails";


import {Routes, Route} from "react-router-dom";

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/services" element={<Services />} />
    <Route path="/Doctors" element={<Doctors/>}/>
    <Route path="/DoctorsDetails" element={<DoctorsDetails />} />
  </Routes>
}

export default Routers