import React from 'react';
import { motion } from 'framer-motion';
import { FiRotateCcw } from 'react-icons/fi';
import Sidebar from '../Components/Sidebar';
import { Link, useLocation } from 'react-router-dom';

const Info = props => {
  const locationObject = useLocation();
  const location = locationObject.pathname;

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
        <Link to='/' className='resetWrap'>
          <motion.div
            className='reset'
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.97 }}>
            <FiRotateCcw size={50} />
          </motion.div>
        </Link>
        <Sidebar info={location === '/info'} />
      </div>
    </motion.div>
  );
};

export default Info;
