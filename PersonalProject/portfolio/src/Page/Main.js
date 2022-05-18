/* eslint-disable */
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Main = (props) => {

  return (
    <motion.div
    variants={props.variants}
    initial={props.enter}
    animate={props.center}
    exit={props.exit}
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }}>
      <div className='page main'>
        <motion.div
          className='welcome'
          animate={{
            rotate: [0, 30, -30, 30, -30, 0],
            scale: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}>
          <div className='left'>WELCOME</div>
          <div className='right'>MY PORTFOLIO</div>
        </motion.div>
        <div className='oneLineIntroduction'>
          Front-End Junior Developer Portfolio <br />
          <span id='myName'>Kwon Doyeon</span>
        </div>
        <div className='arrows'>
          <a href='/introduction'>
            <motion.div
              className='arrow'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}>
              <FiArrowRight />
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
