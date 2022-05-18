import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Sidebar = props => {
  return (
    <>
      <div className='sidebarBox'>
        <div className='menu'>Main</div>
        <div className='menu'>Introduction</div>
        <div className='menu'>Stack</div>
        <div className='menu'>Project</div>
        <div className='menu'>My Information</div>
        <div className='progress'>
          <div className='circle'></div>
          <div className='progressLetter'>Progress</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
