import React from 'react';
import Arrow from '../Arrow';
import { motion } from 'framer-motion';

const Project = (props) => {
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
      <div className='page project'>
        <Arrow prev='stack' next='information'/>
      </div>
    </motion.div>
  );
};

export default Project;