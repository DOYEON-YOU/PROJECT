/* eslint-disable */

import React, { useEffect } from 'react';
import Arrow from '../Components/Arrow';
import { motion } from 'framer-motion';
import Sidebar from '../Components/Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = props => {
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
      }}>
      <div className='page project'>
        <div className='comment' data-aos='flip-left' data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            Comment
          </h1>
          <div className='section'>
            <div className='img'>
              <img src='https://ifh.cc/g/pNMZYs.jpg' alt='commentProject' />
            </div>
            <div className='explainBox'>
              <div className='explain'>
                닉네임과 각자의 닉네임을 쉽게 구별할 수 있는 닉네임 인덱스의
                색상을 직접 정할 수 있게끔 구현한 미니프로젝트입니다.
                Recomment를 작성할 수 있는 기능도 구현하였으나, 한 번밖에
                작성되지 않습니다. 이 부분은 코드를 조금 더 쳐다보고, 로직을
                상세하게 짜면 해결될 부분이라 생각하여 추후 개선할 예정입니다.
              </div>
              <a href='https://doyeon-you.github.io/comment/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className='calculator projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            Calculator
          </h1>
          <div className='section'>
            <div className='explainBox'>
              <div className='explain'>
                All Clear, Backspace 기능이 포함되어 있으며, 판별 버튼을 눌렀을
                때에 값을 양수와 음수로 판별하여 알림창으로 띄워주는 기능을 더해
                본 미니 프로젝트입니다. eval 함수를 사용하여 만들었다는 점이
                가장 큰 개선점이지만, 아직 eval 함수를 대체하여 계산기를 만드는
                방법을 확실하게 이해하지 못하여 개선하지 못하였으나, 꾸준히
                공부하고 예제를 찾아보며 개선할 예정입니다.
              </div>
              <a
                href='https://doyeon-you.github.io/calculator/'
                target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
            <div className='img'>
              <img src='https://ifh.cc/g/wsBdF2.png' alt='commentProject' />
            </div>
          </div>
        </div>
        <div
          className='bookMark projects'
          data-aos='flip-left'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            BookMark
          </h1>
          <div className='section'>
            <div className='img'>
              <img src='https://ifh.cc/g/gv10OZ.png' alt='commentProject' />
            </div>
            <div className='explainBox'>
              <div className='explain'>
                북마크에 추가하고자 하는 사이트 도메인과 이름을 입력한 후 추가
                버튼을 누르면 하단에 바로가기 버튼이 생성 되는 북마크
                생성기입니다. 자바스크립트 기초를 공부한 이후 가장 처음 만들었던
                프로젝트여서 기능이 한 가지 뿐이며, localStorage를 사용하였으면
                더 좋았을 것 같습니다.
              </div>
              <a href='https://doyeon-you.github.io/bookMark/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className='todoList projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            To-Do List
          </h1>
          <div className='section'>
            <div className='explainBox'>
              <div className='explain'>
                작성 이후 우측 상단 버튼을 누르면 자신이 작성한 투두리스트를
                이미지 파일로 저장하거나, 클립보드에 복사할 수 있게끔 구현한
                투두리스트입니다. 개선점은 라이브러리 특성 상 캡처하였을 때
                input의 글자들이 조금씩 잘린다는 점이며, 캘린더를 input 형식으로
                만들었다는 점입니다. 이 부분은 추후 자바스크립트를 통해 직접
                구현하여 개선할 예정입니다.
              </div>
              <a href='https://doyeon-you.github.io/ToDoList/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
            <div className='img'>
              <img src='https://ifh.cc/g/jAqQhA.png' alt='commentProject' />
            </div>
          </div>
        </div>
        <div
          className='loginForm projects'
          data-aos='flip-left'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            Log-In Form
          </h1>
          <div className='section'>
            <div className='img'>
              <img src='https://ifh.cc/g/GgnDg3.png' alt='commentProject' />
            </div>
            <div className='explainBox'>
              <div className='explain'>
                이메일의 형식 체크를 정규식과 search 함수를 이용해 로그인폼을
                구현해 본 미니 프로젝트입니다. 프로젝트의 형태가 서버와 연동된
                프로젝트가 아닌 화면 구현이었기 때문에 더 다른 기능을 넣을 수
                없는 것이 조금 아쉬웠습니다.
              </div>
              <a href='https://doyeon-you.github.io/loginForm/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className='register projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            Register Form
          </h1>
          <div className='section'>
            <div className='explainBox'>
              <div className='explain'>
                앞서 로그인 폼과 같은 테마로 만들었으며, 이메일의 형식 체크를
                정규식과 search 함수를 이용해 구현했습니다. 비밀번호와 비밀번호
                확인 창의 value를 가져와 비교해 비밀번호 일치 여부를 확인하는
                기능을 넣어본 회원가입 폼 미니 프로젝트입니다.
              </div>
              <a href='https://doyeon-you.github.io/Register/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
            <div className='img'>
              <img src='https://ifh.cc/g/B9dhTC.png' alt='commentProject' />
            </div>
          </div>
        </div>
        <div
          className='album projects'
          data-aos='flip-left'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            Album
          </h1>
          <div className='section'>
            <div className='img'>
              <img src='https://ifh.cc/g/mclOat.png' alt='commentProject' />
            </div>
            <div className='explainBox'>
              <div className='explain'>
                파일을 받아와 Upload 버튼을 누르면 사진을 올려주는 앨범에 Zoom
                라이브러리를 사용하지 않고 사진을 클릭했을 때 사진을 확대하는
                기능을 넣어 구현해 보았습니다. 사진을 Zoom 한 후 다시 메인
                화면으로 돌아왔을 때 사진이 우측으로 조금 이동하는 오류가
                있습니다. Drag & Drop으로 사진을 끌어오는 기능을 넣으면 더
                완성도 있는 앨범이 될 것 같아 두 점 모두 개선 예정입니다.
              </div>
              <a href='https://doyeon-you.github.io/Album/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </div>
          </div>
        </div>
        <Arrow next='info' />
        <Sidebar project={location === '/project'} />
      </div>
    </motion.div>
  );
};

export default Project;
