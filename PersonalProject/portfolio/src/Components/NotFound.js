import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = props => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className='notFoundPage'>
        <div className='errorMessage'>
          <div
            className='enError'
            data-aos='flip-up'
            data-aos-delay='500'
            data-aos-duration='1000'>
            404 : Not Found
          </div>
          <hr />
          <div
            data-aos='flip-down'
            data-aos-delay='1000'
            data-aos-duration='1000'
            className='koErrorWrap'>
            <div className='koError'>페이지를 찾을 수 없습니다.</div>
            <div className='koError'>
              아래의 버튼을 눌러 유효한 페이지로 돌아가세요.
            </div>
          </div>
          <a href='/'>
            <button data-aos='fade-up' data-aos-delay='1500' data-aos-duration='2000' className='returnPage'>Return To Portfolio</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
