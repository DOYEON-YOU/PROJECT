/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to={location[0]} id='html' className={props.html}>
        HTML
      </Link>
      <hr />
      <Link to={location[1]} id='css' className={props.css}>
        CSS
      </Link>
      <hr />
      <Link to={location[2]} id='js' className={props.js}>
        JavaScript
      </Link>
      <hr />
      <Link to={location[3]} id='ts' className={props.ts}>
        TypeScript
      </Link>
      <hr />
      <Link to={location[4]} id='react' className={props.react}>
        React
      </Link>
      <hr />
      <Link to={location[5]} id='sass' className={props.sass}>
        Sass
      </Link>
    </div>
  );
};

export default SkillList;
