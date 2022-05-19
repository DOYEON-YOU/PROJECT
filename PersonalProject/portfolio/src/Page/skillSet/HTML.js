import React, { useEffect } from 'react';
import Exit from './Exit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const HTML = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <motion.div
      className='skill html'
      animate={{
        scale: [0, 1],
        opacity: [0, 1]
      }}
      exit={{
        scale: [1, 0]
      }}>
      <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
        HTML 숙련도
      </h1>
      <ul class='skills' data-aos='zoom-in' data-aos-duration='500'>
        <li class='full'></li>
        <li class='full'></li>
        <li class='full'></li>
        <li class='full'></li>
        <li class='full'></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <hr />
      <Exit />
    </motion.div>
  );
};

export default HTML;
