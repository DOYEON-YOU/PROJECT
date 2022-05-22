/* eslint-disable */

import React from 'react';
import {FiX} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Exit = () => {
  return (
    <Link to='/stack' className='exitIcon'>
      <FiX className='ico'/>
    </Link>
  );
};

export default Exit;