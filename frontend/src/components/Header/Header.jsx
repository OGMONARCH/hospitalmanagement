import { useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
  
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('hidden');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Menu */}
          <div className="navigation hidden md:flex">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[600]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>

            <Link to="/Login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className="navigation fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 md:hidden hidden"
        ref={menuRef}
      >
        <div className="menu absolute top-0 right-0 w-64 h-full bg-white p-5 flex flex-col">
          <div className="flex justify-end">
            <AiOutlineClose className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          </div>
          <ul className="flex flex-col gap-4 mt-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={(navClass) =>
                    navClass.isActive
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-textColor text-[16px] leading-7 font-[600]'
                  }
                  onClick={toggleMenu}
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
