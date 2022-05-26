/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';

const CSS = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <>
      <motion.div
        className='skill css'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          CSS
        </h1>
        <hr />
        <div className='skillExplain'>
          <p>display: flex; 속성에 대한 기본적인 이해도가 있습니다.</p>
          <p>텍스트와 배경색과 같은 기본적인 속성에 대한 이해도가 있습니다.</p>
          <p>미디어 쿼리를 이용한 반응형 웹을 구현할 수 있습니다.</p>
          <p>em, px, vw, vh과 같은 크기 단위에 대한 이해도가 있습니다.</p>
        </div>
      </motion.div>
      <Exit />
      <SkillList css={location == '/stack/css' ? 'true' : 'false'} />
    </>
  );
};

export default CSS;
