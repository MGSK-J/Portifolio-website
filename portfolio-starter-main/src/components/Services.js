import React from 'react';
//icons
import {BsArrowUpRight} from 'react-icons';
//motion
import {motion} from 'framer-motion';
//variants
import {} from '../variants';

const services=[
  {
    name:"Developer",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:'Learn more'
  },
  {
    name:"Project Manager",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:'Learn more'
  },
  {
    name:"Researcher",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link:'Learn more'
  }
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text and images */}
        <div className='flex-1 lg:bg-services lg:bg-bottom bg:no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I do</h2>
          <h3 className='h3 mb-16 max-w-[455px]'>
            I'm a full stack developer with over 2 years of experience</h3>
        <button className='btn btn-sm'>
          See my work</button>
        </div>
        {/*services */}
        <div>Services</div>
      </div>
    </div>
  </section>;
};

export default Services;
