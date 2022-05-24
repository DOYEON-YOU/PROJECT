/* eslint-disable */
import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './Page/Main';
import Introduction from './Page/Introduction';
import Stack from './Page/Stack';
import HTML from './Page/skillSet/HTML';
import CSS from './Page/skillSet/CSS';
import Javascript from './Page/skillSet/Javascript';
import Typescript from './Page/skillSet/Typescript';
import JsReact from './Page/skillSet/JsReact';
import SASS from './Page/skillSet/SASS';
import Project from './Page/Project';
import Info from './Page/Info';
import Loading from './Components/Loading';
import NotFound from './Components/NotFound';

function App() {
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: direction => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className='App'>
      <AnimatePresence>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
          <Route
            path='/intro'
            element={
              <Introduction
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
          <Route
            path='/stack'
            element={
              <Stack
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
          <Route path='/stack/html' element={<HTML />} />
          <Route path='/stack/css' element={<CSS />} />
          <Route path='/stack/javascript' element={<Javascript />} />
          <Route path='/stack/typescript' element={<Typescript />} />
          <Route path='/stack/react' element={<JsReact />} />
          <Route path='/stack/sass' element={<SASS />} />
          <Route
            path='/project'
            element={
              <Project
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
          <Route
            path='/info'
            element={
              <Info
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
