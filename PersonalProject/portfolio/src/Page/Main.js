/* eslint-disable */
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Arrow from '../Components/Arrow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main = props => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <motion.div
      variants={props.variants}
      initial={props.enter}
      animate={props.center}
      exit={props.exit}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <div className='page main'>
        <div className='welcome'>
          <div
            data-aos='flip-up'
            data-aos-easing='ease-in-out'
            data-aos-duration='500'>
            WELCOME
          </div>
          <div
            data-aos='flip-up'
            data-aos-easing='ease-in-out'
            data-aos-duration='1000'>
            MY PORTFOLIO
          </div>
        </div>
        <div
          className='oneLineIntroduction'
          data-aos='fade-up'
          data-aos-duration='3000'>
          Front-End Junior Developer Portfolio <br />
          <span id='myName'>Kwon Doyeon</span>
        </div>
        <Arrow next='introduction' />
      </div>
    </motion.div>
  );
};

export default Main;
