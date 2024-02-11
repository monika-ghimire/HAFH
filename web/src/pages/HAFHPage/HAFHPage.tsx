import { Link, routes, navigate } from '@redwoodjs/router';
import { Metadata } from '@redwoodjs/web'
import React, { useEffect } from 'react';

import './style.css';

const HafhPage = () => {
  const chnageroute = setTimeout(() => {
    navigate(routes.landing());
  }, 4000);

  useEffect(() => {
    const timer = setTimeout(() => {
      const backgroundSection = document.getElementById('backgroundSection');
    backgroundSection.classList.add('black-bg');
      chnageroute
    }, 3000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Metadata title="HAFH" description="Hafh page" />
      <section
        id="backgroundSection"
        className="h-screen flex items-center justify-center bg-black"
      >
        <h1 className="text-white text-3xl"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="3000"
        >HAFH</h1>
        <div  className='layer'></div>

      </section>
    </>
  );
};

export default HafhPage;
