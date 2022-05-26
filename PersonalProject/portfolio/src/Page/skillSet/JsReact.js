/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JsReact = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <>
      <motion.div
        className='skill react'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          React
        </h1>
        <hr />
        <div className='skillExplain'>
          <p>
            React Router DOM을 사용하여 SPA(Single Page Application)를 구현할 수
            있습니다.
          </p>
          <p>
            Framer Motion, Bootstrap과 같은 라이브러리 사용을 적절히 할 수
            있습니다.
          </p>
          <p>
            React Hooks에 대해 공부하고 있으며, useState와 useEffect에 대한 기초
            이해도가 있습니다.
          </p>
          <p>함수형 컴포넌트를 사용할 수 있습니다.</p>
          <p>
            리액트의 생명 주기(Life Cycle)와, Mount, Update, Unmount에 대한 기초
            지식을 가지고 있습니다.
          </p>
          <p>
            Styled-Components를 사용할 수 있으며, CSS in JS에 대한 기초적인
            이해도가 있습니다.
          </p>
        </div>
      </motion.div>
      <Exit />
      <SkillList react={location == '/stack/react' ? 'true' : 'false'} />
    </>
  );
};

export default JsReact;
