/* eslint-disable */

import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <div className='loading'>
      <div className='loadBox'>
        <HashLoader color='white' size={100} className='loadIcon' />
        <divc className='loadLetter'>LOADING . . .</divc>
      </div>
    </div>
  );
};

export default Loading;
