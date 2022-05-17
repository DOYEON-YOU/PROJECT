/* eslint-disable */
import './App.scss';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './MainPage';

function App() {

  return (
    <div className='Container'>
      <MainPage/>
      <div className='page main'>
        <div className='welcome'>
          <div className='left'>WELCOME!</div>
          <div className='right'>THIS IS</div>
          <div className='left'>MY PORTFOLIO</div>
        </div>
        <div className='oneLineIntroduction'>Front-End</div>
      </div>
      <div className='page introduction'>hi</div>
      <div className='page stack'>hi</div>
      <div className='page project'>hi</div>
      <div className='page info'>hi</div>
    </div>
  );
}

export default App;
