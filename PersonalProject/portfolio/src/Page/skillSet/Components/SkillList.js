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
      <Link to={location[0]} className={props.html}>
        HTML
      </Link>
      <hr />
      <Link to={location[1]} className={props.css}>
        CSS
      </Link>
      <hr />
      <Link to={location[2]} className={props.js}>
        JavaScript
      </Link>
      <hr />
      <Link to={location[3]} className={props.ts}>
        TypeScript
      </Link>
      <hr />
      <Link to={location[4]} className={props.react}>
        React
      </Link>
      <hr />
      <Link to={location[5]} className={props.sass}>
        Sass
      </Link>
    </div>
  );
};

export default SkillList;
