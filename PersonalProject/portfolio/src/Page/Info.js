import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Info = props => {

    const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : 1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1000 : -1000,
        opacity: 0,
      };
    },
  }

  return (
    <motion.div
    variants={variants}
    initial='enter'
    animate='center'
    exit='exit'
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }}>
      <div className='page info'>
        <div className='arrows'>
          <a href='/project'>
            <motion.div
              className='arrow'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}>
              <FiArrowLeft />
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
