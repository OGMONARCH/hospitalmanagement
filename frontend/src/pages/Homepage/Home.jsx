import heroImg01 from "../../assets/images/about.png";
import heroImg02 from "../../assets/images/feature-img.png";
import heroImg03 from "../../assets/images/hero-img03.png";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import featureImg from "../../assets/images/feature-img.png";
import VideoIcon from "../../assets/images/video-icon.png";
import avatarIcon from "../../assets/images/avatar-icon.png";
import faqImg from "../../assets/images/faq-img.png"

import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


import About from "../Aboutpage/About";
import ServiceList from "../ServicesPage/ServiceList";
import DoctorsList from "../Doctors/DoctorsList";
import FaqList from "../../components/Faq/FaqList";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
    return <>
    {/* Hero Section */}
    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Hero Content */}
          <div>
            <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi sapiente. Esse atque perspiciatis harum alias sed cum error voluptatem reprehenderit id? Aliquam quasi, magni nulla sed quam repellendus in.
                </p>
                <button className="btn">Request an Appointment</button>
            </div>

            {/* Hero Counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                      <div>
                        {/* <div className="flex flex-col items-center gap-[20px]"> */}
                          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor" > 30+</h2>
                          <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                          <p className="text__para">Years Of Experience</p>
                      </div>



                      <div>
                        {/* <div className="flex flex-col items-center gap-[20px]"> */}
                          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor" > 15+</h2>
                          <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                          <p className="text__para">Clinic Locations</p>
                      </div>



                      <div>
                        {/* <div className="flex flex-col items-center gap-[20px]"> */}
                          <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor" >100%</h2>
                          <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                          <p className="text__para">Patient Satsifaction</p>
                      </div>
                </div>
          </div>
          {/* Hero Content */}
          <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full md: mt-[35px] " src={heroImg01} alt=""/>
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt=""/>
                <img className="w-full " src={heroImg03} alt=""/>
              </div>
          </div>

        </div>
      </div>

    </section>
   {/*Hero Content End */}

  {/* About Section */}
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center ">
          Providing the best medical services
          </h2>
          <p className="text__para text-center">
            World-class Care for everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem inventore corrupti, distinctio consectetur vitae eos sapiente rerum quidem quas iusto maiores hic sunt corporis minima magnam pariatur labore expedita.
          </p>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        
        <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt=""/>
            </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center"> 
                Find a doctor
              </h2>
              <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor">
            World-class Care for everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem inventore corrupti, distinctio consectetur vitae eos sapiente rerum quidem quas iusto maiores hic sunt corporis minima magnam pariatur labore expedita.
          </p>

          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
          <FaArrowRight />
          </Link>
            </div>
        </div>
        <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt=""/>
            </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center"> 
                Find Location
              </h2>
              <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor">
            World-class Care for everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem inventore corrupti, distinctio consectetur vitae eos sapiente rerum quidem quas iusto maiores hic sunt corporis minima magnam pariatur labore expedita.
          </p>

          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
          <FaArrowRight />
          </Link>
            </div>
        </div>
        <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt=""/>
            </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center"> 
                Fix shedule
              </h2>
              <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor">
            World-class Care for everyone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem inventore corrupti, distinctio consectetur vitae eos sapiente rerum quidem quas iusto maiores hic sunt corporis minima magnam pariatur labore expedita.
          </p>

          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
          <FaArrowRight />
          </Link>
            </div>
        </div>
      </div>
      </div>
    </section>

    {/* About Section End */}

    <About/>
   {/* Service section */}
   <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched, expert healthcare
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
    {/* Service Section End */}

    {/* Features Section */}
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* Feature Content */}
          <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br/> anytime 
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment.
                </li>
              </ul>
              <Link to='/'>
              <button className="btn">Learn More</button>
              </Link>
          </div>


          {/* Feature Img */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="" className="w-3/4"/>

            <div className="w-[150px] lg:w-[248px]  bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue,24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={VideoIcon} alt=""/>
                </span>
              </div>


              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                Consultation
              </div>

              <div className="flex items-center gap=[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt=""/>
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  Wayne Collins
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* Features Section End */}
    {/* Our great doctors */}
    <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched, expert healthcare
          </p>
        </div>

        <DoctorsList/>
      </div>
    </section>
    {/* Our great doctors End */}
    {/*  FAQ section */}
    <section>
      <div className="container">
         <div className="flex justify-between gap-[50px] lg:gap-0">
            <div>
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
                <h2 className="heading">
                  Most Questions by our beloved patients
                </h2>

                <FaqList />
            </div>
          </div>
      </div>
    </section>
    {/*  FAQ section END */}
    {/* Testimonial section */}
      <section>
        <div className="contianer">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patients say</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health system offers unmatched, expert healthcare
          </p>
        </div>

        <Testimonial/>
        </div>
      </section>

    {/* Testimonial section End*/}

    </>
   
  }
  
  export default Home;
  