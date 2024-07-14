import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

import logo from '../../assets/images/logo.png';


const socialLinks = [
  {  
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className='group hover:text-black w-4 h-5' />,
  },
  {  
    path: "https://www.github.com",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {  
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {  
    path: "https://www.linkedin.com/in/emmanuel-omoruyi-781822297/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  { 
    path: '/home',
    display: 'Home'
  },
  { 
    path: '/', 
    display: 'About Us' 
  },
  { 
    path: '/services', 
    display: 'Services' 
  },
  { 
    path: '/', 
    display: 'Blog' 
  },
];

const quickLinks02 = [
  { 
    path: '/find-a-doctor',
    display: 'Find a Doctor'
  },
  { 
    path: '/', 
    display: 'Request an Appointment' 
  },
  { 
    path: '/', 
    display: 'Find a Location' 
  },
  { 
    path: '/', 
    display: 'Get a Opinion' 
  },
];

const quickLinks03 = [
  { 
    path: '/',
    display: 'Donate'
  },
  { 
    path: '/contact', 
    display: 'Contact Us' 
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt='Logo' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} developed by Immanuel King. All rights reserved.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <a href={link.path} key={index} className='w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor mb-4'>Quick Links</h4>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className='mb-2'>
                  <Link to={link.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor mb-4'>Quick Links</h4>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className='mb-2'>
                  <Link to={link.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor mb-4'>Quick Links</h4>
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className='mb-2'>
                  <Link to={link.path} className='text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
