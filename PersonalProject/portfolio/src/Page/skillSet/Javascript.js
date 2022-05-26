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
        <div className='skillExplain'>
          <p>
            String, Number과 같은 기본적인 데이터 타입에 대한 이해도가 있습니다.
          </p>
          <p>
            원시 타입과 참조 타입을 구별할 수 있으며, 깊은 복사와 얕은 복사의
            차이점을 알고 있습니다.
          </p>
          <p>컴파일러, 인터프리터에 대한 기본적인 이해도가 있습니다.</p>
          <p>
            조건문, 반복문과 같은 자바스크립트 기초 문법에 대한 이해도가
            있습니다.
          </p>
          <p>함수와 변수의 유효 범위에 대해 이해하고 있습니다.</p>
          <p>
            Event Listener를 적절하게 사용할 수 있으며, 이벤트를 사용해 원하는
            것을 구현할 수 있습니다.
          </p>
          <p>
            프로토타입과 프로토타입 체인에 대한 이해도가 있으며, Array.prototype
            함수를 적절히 사용할 수 있습니다.
          </p>
          <p>자바스크립트의 호이스팅 개념을 이해하고 있습니다.</p>
          <p>템플릿 리터럴(Template literal)에 대한 이해도가 있습니다.</p>
        </div>
      </motion.div>
      <Exit />
      <SkillList js={location == '/stack/javascript' ? 'true' : 'false'} />
    </>
  );
};

export default Javascript;
