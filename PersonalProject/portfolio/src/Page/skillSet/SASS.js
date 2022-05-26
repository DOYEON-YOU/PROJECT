/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SASS = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <>
      <motion.div
        className='skill sass'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          SASS(SCSS)
        </h1>
        <hr />
        <div className='skillExplain'>
          <p>중첩 CSS를 능숙하게 작성할 수 있습니다.</p>
          <p>변수에 스타일을 할당하여 사용할 수 있습니다.</p>
        </div>
      </motion.div>
      <Exit />
      <SkillList sass={location === '/stack/sass' ? 'true' : 'false'} />
    </>
  );
};

export default SASS;
