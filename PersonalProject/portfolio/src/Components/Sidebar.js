import React from 'react';

const Sidebar = props => {

  return (
    <>
      <div className='sidebarBox'>
        <div className='menu' id={props.main}><a href="/">Main</a></div>
        <div className='menu' id={props.introduction}><a href="/intro">Introduction</a></div>
        <div className='menu' id={props.stack}><a href="/stack">Stack</a></div>
        <div className='menu' id={props.project}><a href="/project">Project</a></div>
        <div className='menu' id={props.info}><a href="/info">Information</a></div>
      </div>
    </>
  );
};

export default Sidebar;
