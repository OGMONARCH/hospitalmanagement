import {Link} from 'react-router-dom';


import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillInstagram} from 'react-icons/ai';

const socialLinks=[
{  
  path: "https://www.youtube.com",
  icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
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
{ path: '/services', 
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
  { path: '/', 
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

  const year = new Date().getFullYear()
  
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
              <img src={logo} alt=''/>
              <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                Copyright @ {year} developed by Immanuel King all rights reserved
              </p>
              <div className='flex items-center gap-3 mt-4'>
                {socialLinks.map((link, index)=>{
                  <Link to={link.path} key={index} className='w-9 h-9 border-solid border-[#181A1E] hover:border-none'>
                    {link.icon}
                  </Link>
                })}
            </div>
            </div>

            
        </div>
      </div>
    </footer>
  )
}

export default Footer