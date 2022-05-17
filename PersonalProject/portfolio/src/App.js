/* eslint-disable */
import './App.scss';
import styled from 'styled-components';
import { ReactDOM } from 'react-dom/client';
import { Route, Routes, Link } from 'react-router-dom';
import Main from './Page/Main'
import Introduction from './Page/Introduction';
import Stack from './Page/Stack'
import Project from './Page/Project';
import Info from './Page/Info';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/stack" element={<Stack/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/information" element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
