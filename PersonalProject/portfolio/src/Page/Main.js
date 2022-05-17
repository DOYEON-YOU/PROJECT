/* eslint-disable */
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { FiArrowRight} from "react-icons/fi"
import Arrow from '../Arrow';

const Main = () => {
  return (
    <>
      <div className='page main'>
        <div className='welcome'>
          <div className='left'>WELCOME</div>
          <div className='right'>MY PORTFOLIO</div>
        </div>
        <div className='oneLineIntroduction'>
          Front-End Junior Developer Portfolio <br />
          <span id='myName'>Kwon Doyeon</span>
        </div>
        <div className='arrows'>
          <a href="/introduction">
          <div className='arrow'><FiArrowRight/></div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
