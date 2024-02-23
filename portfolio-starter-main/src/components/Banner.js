import React from 'react';
//images
import Image from '../assets/avatar.png';
//import icons
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
//type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='section' id='home'>
    <div className='container mx-auto'>
    <div>
      {/*text*/}
      <div>
        <h1><span>Sonali</span> Jayarathne</h1>
        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>I am a</span>
          <TypeAnimation sequence={
            [
              'Developer',2000,
              'Designer',2000
            ]
          }
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </div>
      </div>
      {/*images */}
      <div>
        <img src={Image} alt=''/>
      </div>
    </div>
    </div>
  </section>;
};

export default Banner;
