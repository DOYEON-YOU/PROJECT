/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './SkillList';
import Exit from './Exit';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';

const CSS = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill css'
        animate={{
          scale: [0.5, 1],
          opacity: [0.5, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          CSS 숙련도
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
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        css={window.location.pathname == '/stack/css' ? 'true' : 'false'}
      />
    </>
  );
};

export default CSS;
