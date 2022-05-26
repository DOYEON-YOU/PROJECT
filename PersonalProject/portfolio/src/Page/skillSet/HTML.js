/* eslint-disable */

import React, { useEffect } from 'react';
import Exit from './Components/Exit';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SkillList from './Components/SkillList';

const HTML = () => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

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
        <hr />
        <div className='skillExplain'>
          <p>적절한 태그를 골라 사용할 수 있습니다.</p>
          <p>
            블록(Block)과 인라인(Inline) 요소의 차이점을 명확히 알고 있습니다.
          </p>
          <p>
            List와 Table을 적절히 사용할 수 있으며, Form 요소를 용도에 맞게
            사용할 수 있습니다.
          </p>
        </div>
      </motion.div>
      <Exit />
      <SkillList html={location === '/stack/html' ? 'true' : 'false'} />
    </>
  );
};

export default HTML;
