/* eslint-disable */

import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Arrow = props => {

  useEffect(() => {
    AOS.init();
  })

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

    return (
      <>
        <div className='arrows'>
          <a href={`/${props.next}`}>
            <motion.div
              className='arrow'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}>
              <FiArrowRight size={50}/>
            </motion.div>
          </a>
        </div>
      </>
    );
  };

export default Arrow;
