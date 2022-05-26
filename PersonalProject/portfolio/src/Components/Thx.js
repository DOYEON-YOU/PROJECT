import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Thx = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className='thxWrap'>
      <div className='thx' data-aos='flip-left' data-aos-duration='1000'>
        Thank you for watching my portfolio!
      </div>
    </div>
  );
};

export default Thx;
