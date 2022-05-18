import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Info = props => {

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
