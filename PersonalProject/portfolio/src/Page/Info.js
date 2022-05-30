/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiRotateCcw } from 'react-icons/fi';
import Sidebar from '../Components/Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import Thx from '../Components/Thx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Info = props => {
  const locationObject = useLocation();
  const location = locationObject.pathname;

  let [load, setLoad] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  });

  return (
    <>
      {load === true ? (
        <Thx />
      ) : (
        <div className='page info'>
          <div className='infoBox' data-aos='flip-left'>
            <div className='aboutMe'>About Me</div>
            <h2>📞 Contact</h2>
            <a href='mailto:fjdksla3@gmail.com'>
              <div className='shortCut'>
                <AiTwotoneMail style={{ marginRight: '10px' }} size={40} />
                fjdksla3@gmail.com
              </div>
            </a>
            <a href='tel:010-5647-9689'>
              <div className='shortCut'>
                <IoCall style={{ marginRight: '10px' }} size={40} />{' '}
                010-5647-9689
              </div>
            </a>
            <br />
            <h2>🔗 Pages</h2>
            <a href='https://github.com/DOYEON-YOU' target='_blank'>
              <div className='shortCut'>
                <BsGithub style={{ marginRight: '10px' }} size={40} />{' '}
                DOYEON-YOU
              </div>
            </a>
            <a
              href='https://doyeonyou.notion.site/Coding-68cfaa38973f49fcb752259a811ef5eb'
              target='_blank'>
              <div className='shortCut'>
                <SiNotion style={{ marginRight: '10px' }} size={40} />{' '}
                Study-Blog
              </div>
            </a>
          </div>
          <Link to='/' className='resetWrap'>
            <motion.div
              className='reset'
              whileHover={{ scale: 1.05, opacity: 1 }}
              whileTap={{ scale: 0.97 }}>
              <FiRotateCcw size={50} />
            </motion.div>
          </Link>
          <Sidebar info={location === '/info'} />
        </div>
      )}
    </>
  );
};

export default Info;
