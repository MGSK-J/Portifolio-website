import React from 'react';

//import icons
import {BiBriefcase, BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';

//import links
import {Link} from'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto flex justify-between items-center px-5'>
        <Link 
        to="home"
        smooth={true}
        spy={true}
        offset={-200}
        activeClass='active'
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link >
        <Link 
        to="about"
        spy={true}
        activeClass='active'
        smooth={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser/>
        </Link>
        <Link 
        to="services"
        smooth={true}
        spy={true}
        activeClass='active'
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardData/>
        </Link>
        <Link 
        to="work" 
        smooth={true}
        spy={true}
        activeClass='active'
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiBriefcase/>
        </Link>
        <Link 
        to="contact" 
        smooth={true}
        spy={true}
        activeClass='active'
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsChatSquare/>
        </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
