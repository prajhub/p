import React from 'react';

import {heroData} from '../data'


const Hero = () => {

  const {title, subtitle, btnText, image} = heroData


  return(
  
  <section className='lg:h-[900px] py-12'>
    <div className='container mx-auto'>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>
    </div>
  </section>
  
  
  )
};

export default Hero;
