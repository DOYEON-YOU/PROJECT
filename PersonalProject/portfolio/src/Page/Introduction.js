/* eslint-disable */

import React, { useEffect } from 'react';
import Arrow from '../Components/Arrow';
import Sidebar from '../Components/Sidebar';
import { useLocation } from 'react-router-dom';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Container, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = props => {
  useEffect(() => {
    AOS.init();
  });

  const locationObject = useLocation();
  const location = locationObject.pathname;

  return (
    <motion.div
      variants={props.variants}
      initial={props.enter}
      animate={props.center}
      exit={props.exit}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className='introWrap'>
      <div className='page introduction'>
        <div className='wrap'>
          <div className='sayHello'>
            <h1>안녕하세요!</h1>
            <h4>즐기며 코딩하는 주니어 프론트엔드 개발자 권도연입니다.</h4>
            <hr />
          </div>
        </div>
        <div className='pBox' data-aos='zoom-in' data-aos-duration='1000'>
          <h1>🔎 Motive</h1>
          <br />
          <div>
            어렸을 때부터 나이 차이가 많이 나는 언니의 모든 작업 과정을 어깨
            너머에서 지켜봐온 결과 디자인 감각이 많이 늘게 되어 웹디자인 외주를
            여러 차례 진행했었습니다.
          </div>
          <br />
          <div>
            그렇게 외주와 알바만을 전전하다 어느 순간 고졸의 학력이지만
            실력만으로 인정 받을 수 있는 직업이 어떤 게 있는지 고민을 하게
            되었고, 개발자라는 직업이 능력만으로 판단 받을 수 있는 직종이라는
            것을 알게 된 이후 개발자를 희망하게 된 그 순간부터 제게 매력적으로
            다가왔던 것은 프론트엔드였습니다.
          </div>
          <br />
          <div>
            개발자가 되기로 다짐했던 순간, 프론트엔드 개발을 시작하려고 해 라는
            책을 무작정 구입해 혼자 독학해 본 결과, 정말 재미있었고 이런
            식으로도 제가 원하는 디자인을 할 수 있구나 하는 흥미를 느껴 현재는
            전혀 맞지 않는 백엔드 국비 지원 교육을 받고 있지만 제가 하고 싶은
            프론트엔드를 집중적으로 공부하는 중입니다.
          </div>
        </div>
        <div className='pBox' data-aos='zoom-in' data-aos-duration='1000'>
          <h1>🎨 Personality</h1>
          <br />
          <div>
            한 번 시작한 일은 끝맺을 때까지 잘 놓지 못해 앉으면 제가 하고자 하는
            일이 완전히 마무리 될 때까지 잘 일어나지 못하는 성격을 가지고
            있습니다. 그렇기 때문에 문제 해결에 적극적인 편이며, 끈질기게
            파고들어 끝까지 그 문제를 해결하고자 포기하지 않고 노력합니다.
          </div>
          <br />
          <div>
            어제보다 오늘, 오늘보다 내일 더 나은 개발자가 되기 위하여 항상
            공부하고, 또 매진합니다. 어제의 해결 되지 않던 문제점을 오늘 해결할
            수 있게끔, 오늘의 문제점을 내일 해결할 수 있게끔 한 단계씩 성장해
            나가는 과정을 거치고 있습니다.
          </div>
          <br />
          <div>
            살면서 해본 모든 공부 중에 개발 공부가 가장 재미있고, 지치지 않고
            계속할 수 있겠다 싶은 공부입니다. 즐기는 자를 이길 수 없다는 말이
            있듯이, 저는 개발을 진심으로 즐기고 있으며, 앞으로도 쭉 즐길 자신
            있습니다.
          </div>
        </div>
      </div>
      <Arrow next='stack' />
      <Sidebar introduction={location === '/intro'} />
    </motion.div>
  );
};

export default Introduction;
