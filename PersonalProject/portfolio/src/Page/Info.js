import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const Info = props => {
  return (
    <>
      <div className='page info'>
        <div className='arrows'>
          <a href='/project'>
            <div className='arrow'>
              <FiArrowLeft />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
