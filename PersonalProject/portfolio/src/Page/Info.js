import React from 'react';
import { motion } from 'framer-motion';
import { FiRotateCcw } from 'react-icons/fi';

const Info = props => {
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
      <div className='page info'>
        <a href='/' className='resetWrap'>
          <motion.div
            className='reset'
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.97 }}>
            <FiRotateCcw size={50} />
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
};

export default Info;
