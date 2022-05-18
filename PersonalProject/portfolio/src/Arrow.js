/* eslint-disable */

import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Arrow = props => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

    return (
      <>
        <div className='arrows'>
          <a href={`/${props.prev}`}>
            <motion.div
              className='arrow'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => paginate(1)}>
              <FiArrowLeft />
            </motion.div>
          </a>
          <a href={`/${props.next}`}>
            <motion.div
              className='arrow'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => paginate(-1)}>
              <FiArrowRight />
            </motion.div>
          </a>
        </div>
      </>
    );
  };

export default Arrow;
