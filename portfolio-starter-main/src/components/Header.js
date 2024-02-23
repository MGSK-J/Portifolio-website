import React from 'react';
//import logo
import logo from '../assets/logo.png';

const Header = () => {
  return <header className='bg-pink-500'>
    <div className='py-8'>
    <div className='flex justify-between items-center'>
      {/*logo*/}
      <a href='#'>
      <img src={logo} alt=''/>
      </a>

      {/*button */}
      <button className='btn btn-sm'>Work with me</button>
    </div>
    </div>
  </header>

};

export default Header;
