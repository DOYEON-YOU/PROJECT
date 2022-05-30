/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Arrow from '../Components/Arrow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from '../Components/Sidebar';
import { useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const Main = props => {
  const locationObject = useLocation();
  const location = locationObject.pathname;

  let [load, setLoad] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoad(false);
    }, 1000);
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
      {load === true ? (
        <Loading />
      ) : (
        <div className='page main'>
          <div className='welcome'>
            <div
              data-aos='flip-up'
              data-aos-easing='ease-in-out'
              data-aos-duration='500'>
              WELCOME TO
            </div>
            <div
              data-aos='flip-up'
              data-aos-easing='ease-in-out'
              data-aos-duration='500'
              data-aos-delay='500'>
              MY PORTFOLIO
            </div>
          </div>
          <div
            className='oneLineIntroduction'
            data-aos='fade-up'
            data-aos-duration='3000'
            data-aos-delay='1000'>
            Junior Front-End Developer Portfolio <br />
            <span id='myName'>Kwon Doyeon</span>
          </div>
          <Arrow next='intro' />
          <Sidebar main={location === '/'} />
        </div>
      )}
    </motion.div>
  );
};

export default Main;
