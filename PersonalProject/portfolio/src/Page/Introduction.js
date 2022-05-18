import React, { useEffect } from 'react';
import Arrow from '../Components/Arrow';
import Sidebar from '../Components/Sidebar';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = props => {
  useEffect(() => {
    AOS.init();
  });

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <motion.div
      variants={props.variants}
      initial={props.enter}
      animate={props.center}
      exit={props.exit}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <div className='page introduction'>
        <div className='sayHello'>
          <h1 style={{ fontSize: '80px' }}>안녕하세요!</h1>
          <h4 style={{ fontSize: '30px' }}>
            프론트엔드 개발자를 꿈꾸는 <span className='mark'>권도연</span>
            입니다.
          </h4>
          <hr />
        </div>
        <div data-aos='flip-left' date-aos-duration='1000'>
          <p>
            안asdfasfadfadfasdf녕하세요오임리ㅏㅇ렁나ㅣㅁ럼ㅇ니런ㅇ미ㅏ런미ㅏ얼ㄴㅇ미ㅏ
            ㅓㄹ니어너러널니ㅏㅇ머리ㅏadsjflksdajflksdajfklsjadflkjsfldfㅁㄴ아ㅣ런미ㅏㅇ런미ㅏㄹ
          </p>
        </div>
        <Arrow next='stack' />
        <Sidebar />
      </div>
    </motion.div>
  );
};

export default Introduction;
