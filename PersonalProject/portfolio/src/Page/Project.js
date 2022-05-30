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
                색상을 직접 정할 수 있는 댓글창을 구현한 미니프로젝트입니다.
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
                본 미니 프로젝트입니다.
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
                생성기입니다.
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
                이름을 입력할 수 있는 Input과 할 일을 중요하게 할 일과 필요한
                일로 나누어 작성하게끔 폼을 나누었습니다. 작성 이후 우측 상단
                Save나 Copy 버튼을 누르면 자신이 작성한 투두리스트를 이미지
                파일로 저장하거나, 클립보드에 복사할 수 있게끔 html2canvas
                라이브러리를 사용해 구현한 투두리스트입니다.
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
                구현해 본 미니 프로젝트입니다.
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
                input file을 이용하여 파일을 받아와 upload 버튼을 누르면 사진을
                올려주는 앨범을 구현해 보았습니다. Zoom 라이브러리를 따로
                사용하지 않고 사진을 클릭했을 때 사진을 확대해 볼 수 있는 기능도
                함께 구현해 본 프로젝트입니다. 사진을 Zoom 한 후 다시
                메인 화면으로 돌아왔을 때 사진이 우측으로 조금 이동하는 오류가
                있으나, 해결 중에 있습니다.
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
