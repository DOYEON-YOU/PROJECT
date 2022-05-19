/* eslint-disable */

import React from 'react';

const SkillList = (props) => {

  const location = [
    '/stack/html',
    '/stack/css',
    '/stack/javascript',
    '/stack/typescript',
    '/stack/react',
    '/stack/sass',
  ];


  return (
    <div className='skillList'>
      <a href={location[0]} id='html' className={props.html}>
        HTML
      </a>
      <hr />
      <a href={location[1]} id='css' className={props.css}>
        CSS
      </a>
      <hr />
      <a href={location[2]} id='js' className={props.js}>
        JavaScript
      </a>
      <hr />
      <a href={location[3]} id='ts' className={props.ts}>
        TypeScript
      </a>
      <hr />
      <a href={location[4]} id='react' className={props.react}>
        React
      </a>
      <hr />
      <a href={location[5]} id='sass' className={props.sass}>
        Sass
      </a>
    </div>
  );
};

export default SkillList;
