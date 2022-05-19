import React, { useEffect } from 'react';
import Arrow from '../Components/Arrow';
import Sidebar from '../Components/Sidebar';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Container, Col, Row } from 'react-bootstrap';
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
        <Container className='pBoxs'>
          <Row>
            <Col className='sayHello'>
              <h1 style={{ fontSize: '80px' }}>안녕하세요!</h1>
              <h4 style={{ fontSize: '30px' }}>
                프론트엔드 개발자를 꿈꾸는 권도연입니다.
              </h4>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col
              className='pBox'
              data-aos='flip-left'
              data-aos-delay='300'
              data-aos-duration='3000'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              rerum commodi excepturi, fugit saepe nemo laudantium eaque,
              corporis eveniet fuga minima nesciunt ea? Cum quod quam error non
              nulla voluptatum.
            </Col>
            <Col
              className='pBox'
              data-aos='flip-left'
              data-aos-duration='3000'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              rerum commodi excepturi, fugit saepe nemo laudantium eaque,
              corporis eveniet fuga minima nesciunt ea? Cum quod quam error non
              nulla voluptatum.
            </Col>
          </Row>
          <Row>
            <Col
              className='pBox'
              data-aos='flip-left'
              data-aos-delay='1500'
              data-aos-duration='3000'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              rerum commodi excepturi, fugit saepe nemo laudantium eaque,
              corporis eveniet fuga minima nesciunt ea? Cum quod quam error non
              nulla voluptatum.
            </Col>
            <Col
              className='pBox'
              data-aos='flip-left'
              data-aos-delay='2100'
              data-aos-duration='3000'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              rerum commodi excepturi, fugit saepe nemo laudantium eaque,
              corporis eveniet fuga minima nesciunt ea? Cum quod quam error non
              nulla voluptatum.
            </Col>
            <Col
              className='pBox'
              data-aos='flip-left'
              data-aos-delay='2700'
              data-aos-duration='3000'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              rerum commodi excepturi, fugit saepe nemo laudantium eaque,
              corporis eveniet fuga minima nesciunt ea? Cum quod quam error non
              nulla voluptatum.
            </Col>
          </Row>
        </Container>
        <Arrow next='stack' />
        <Sidebar />
      </div>
    </motion.div>
  );
};

export default Introduction;