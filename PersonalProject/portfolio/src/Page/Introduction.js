/* eslint-disable */

import React, { useEffect, useState } from 'react';
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
          <h1>🔎 Motivate</h1>
          <br />
          <div>
            어렸을 때부터 현업 웹 디자이너인 친언니의 모든 성장 과정을 어깨
            너머에서 지켜봐온 결과 디자인적인 감각이 많이 늘게 되어 웹디자인
            외주를 여러 차례 진행했었습니다. 그러다 개인적인 사정으로 고등학교를
            자퇴하게 되었습니다. 이후에는 검정고시를 따고 알바를 시작하였습니다.
            그러면서 미래에 대해 깊게 생각하였고, 대학교를 진학하기 보다는 취업
            전선에 빨리 뛰어드는 것이 좋다고 생각하였습니다.
          </div>
          <br />
          <div>
            그렇게 외주와 알바만을 전전하다 어느 순간 고졸의 학력이지만
            실력만으로 인정 받을 수 있는 직업이 어떤 게 있는지 고민을 하게
            되었고, 친언니의 조언으로 개발자라는 직업을 알게 되면서 흥미를 가지게
            되었습니다. 개발자라는 직업이 능력만으로 판단 받을 수 있는
            직종이라는 것을 알게 된 이후 개발자를 희망하게 된 그 순간부터 제게
            매력적으로 다가왔던 것은 프론트엔드였습니다.
          </div>
          <br />
          <div>
            개발자가 되기로 다짐하자마자 [프론트엔드 개발을 시작하려고 해] 라는
            책을 무작정 구입해 혼자 독학해 보았고 정말 재미있었습니다. 이런
            식으로도 내가 원하는 웹 페이지를 구현할 수 있구나 하는 부분에서
            흥미를 느꼈고, 마냥 사용자들에게 보이는 인터페이스를 구현하는 것
            뿐만이 아닌 제가 넣고 싶은 기능을 넣어 직접 웹 페이지를 개발할 수
            있다는 점에서 프론트엔드 공부가 재밌어졌습니다.
          </div>
          <br />
          <div>
            취업을 하기 위해 신청했던 국비 교육은 개발자 취업에 대한 지식이 없는
            상태에서 신청하여 백엔드 과정의 교육을 듣게 되었습니다. 이후 제가
            원하는 과정이 아니라는 것을 알게 되었을 때는 이미 수강일이 일주일이
            지나 중도포기도 어려운 상황이었습니다. 그래서 프론트엔드 개발자로
            취직하기 위해 따로 프론트엔드 개발에 필요한 필수 역량을 집중적으로
            공부하는 중입니다.
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
