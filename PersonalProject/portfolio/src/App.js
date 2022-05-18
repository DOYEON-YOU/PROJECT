/* eslint-disable */
import './App.scss';
import { styled } from 'styled-components';
import { ReactDOM } from 'react-dom/client';
import { Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './Page/Main';
import Introduction from './Page/Introduction';
import Stack from './Page/Stack';
import Project from './Page/Project';
import Info from './Page/Info';

function App() {
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : -1000,
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
            path='/introduction'
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
            path='/information'
            element={
              <Info
                variants={variants}
                enter={variants.enter}
                center={variants.center}
                exit={variants.exit}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
