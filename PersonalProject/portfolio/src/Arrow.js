/* eslint-disable */

import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Arrow = props => {
  return (
    <>
      <div className='arrows'>
        <a href={`/${props.prev}`}>
          <div className='arrow' onClick={{}}>
            <FiArrowLeft />
          </div>
        </a>
        <a href={`/${props.next}`}>
          <div className='arrow'>
            <FiArrowRight />
          </div>
        </a>
      </div>
    </>
  );
};

export default Arrow;
