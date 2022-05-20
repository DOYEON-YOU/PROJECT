/* eslint-disable */

import React, { useEffect } from 'react';
import Exit from './Components/Exit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import SkillList from './Components/SkillList';

const HTML = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill html'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          HTML
        </h1>
        <ul class='skills' data-aos='zoom-in' data-aos-duration='500'>
          <li class='full'></li>
          <li class='full'></li>
          <li class='full'></li>
          <li class='full'></li>
          <li class='full'></li>
          <li class='full'></li>
          <li class='full'></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h4>자신감 게이지</h4>
        <hr />
      </motion.div>
      <Exit />
        <SkillList
          html={window.location.pathname === '/stack/html' ? 'true' : 'false'}
        />
    </>
  );
};

export default HTML;
