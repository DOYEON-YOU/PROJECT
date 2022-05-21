/* eslint-disable */

import React, { useEffect } from 'react';
import Arrow from '../Components/Arrow';
import { motion } from 'framer-motion';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = props => {
  useEffect(() => {
    AOS.init();
  });

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
          <Row className='section'>
            <Col className='img'>
              <img src='https://ifh.cc/g/pNMZYs.jpg' alt='commentProject' />
            </Col>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a href='https://doyeon-you.github.io/comment/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
          </Row>
        </div>
        <div
          className='calculator projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            Calculator
          </h1>
          <Row className='section'>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a
                href='https://doyeon-you.github.io/calculator/'
                target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
            <Col className='img'>
              <img src='https://ifh.cc/g/wsBdF2.png' alt='commentProject' />
            </Col>
          </Row>
        </div>
        <div
          className='bookMark projects'
          data-aos='flip-left'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            BookMark
          </h1>
          <Row className='section'>
            <Col className='img'>
              <img src='https://ifh.cc/g/gv10OZ.png' alt='commentProject' />
            </Col>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a href='https://doyeon-you.github.io/bookMark/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
          </Row>
        </div>
        <div
          className='todoList projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            To-Do List
          </h1>
          <Row className='section'>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a href='https://doyeon-you.github.io/ToDoList/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
            <Col className='img'>
              <img src='https://ifh.cc/g/jAqQhA.png' alt='commentProject' />
            </Col>
          </Row>
        </div>
        <div
          className='loginForm projects'
          data-aos='flip-left'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'left' }}>
            Log-In Form
          </h1>
          <Row className='section'>
            <Col className='img'>
              <img src='https://ifh.cc/g/GgnDg3.png' alt='commentProject' />
            </Col>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a href='https://doyeon-you.github.io/loginForm/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
          </Row>
        </div>
        <div
          className='register projects'
          data-aos='flip-right'
          data-aos-delay='300'>
          <h1 className='title' style={{ textAlign: 'right' }}>
            Register Form
          </h1>
          <Row className='section'>
            <Col className='explainBox'>
              <div className='explain'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                impedit culpa obcaecati repellat distinctio aperiam quia quasi
                odit, earum sit, ipsa veritatis suscipit reiciendis soluta et
                quas, doloremque aliquid magni.
              </div>
              <a href='https://doyeon-you.github.io/Register/' target='_blank'>
                <button className='demoBtn'>Demo</button>
              </a>
            </Col>
            <Col className='img'>
              <img src='https://ifh.cc/g/B9dhTC.png' alt='commentProject' />
            </Col>
          </Row>
        </div>
        <Arrow next='info' />
        <Sidebar
          project={window.location.pathname === '/project' ? 'true' : 'false'}
        />
      </div>
    </motion.div>
  );
};

export default Project;
