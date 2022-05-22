import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {

  return (
    <>
      <div className='sidebarBox'>
        <div className='menu' id={props.main}><Link to="/">Main</Link></div>
        <div className='menu' id={props.introduction}><Link to="/intro">Introduction</Link></div>
        <div className='menu' id={props.stack}><Link to="/stack">Stack</Link></div>
        <div className='menu' id={props.project}><Link to="/project">Project</Link></div>
        <div className='menu' id={props.info}><Link to="/info">information</Link></div>
      </div>
    </>
  );
};

export default Sidebar;
