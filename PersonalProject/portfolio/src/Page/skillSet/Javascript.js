/* eslint-disable */

import React, { useEffect } from 'react';
import Exit from './Components/Exit';
import SkillList from './Components/SkillList';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Javascript = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <>
      <motion.div
        className='skill js'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          JavaScript
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList js={location == '/stack/javascript' ? 'true' : 'false'} />
    </>
  );
};

export default Javascript;
