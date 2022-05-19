import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sidebar = props => {

  return (
    <>
      <div className='sidebarBox'>
        <div className='menu'><a href="/">Main</a></div>
        <hr />
        <div className='menu'><a href="/introduction">Introduction</a></div>
        <hr />
        <div className='menu'><a href="/stack">Stack</a></div>
        <hr />
        <div className='menu'><a href="/project">Project</a></div>
        <hr />
        <div className='menu'><a href="/info">My Information</a></div>
      </div>
    </>
  );
};

export default Sidebar;
