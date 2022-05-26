/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Typescript = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <>
      <motion.div
        className='skill ts'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          TypeScript
        </h1>
        <hr />
        <div className='skillExplain'>
          <p>자바스크립트와의 차이점을 명확히 알고 있으며, 타입스크립트 사용을 지향하는 이유에 대해 알고 있습니다.</p>
          <p>타입스크립트의 기본 타입에 대한 이해도가 있습니다.</p>
          <p>인터페이스 사용법에 대한 기초 지식이 있습니다.</p>
          <p>Union 타입과 Intersection 타입의 차이를 알고 있으며, 적절히 쓸 수 있습니다.</p>
        </div>
      </motion.div>
      <Exit />
      <SkillList ts={location == '/stack/typescript' ? 'true' : 'false'} />
    </>
  );
};

export default Typescript;
