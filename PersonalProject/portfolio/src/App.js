/* eslint-disable */
import './App.scss';
import { styled } from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './Page/Main';
import Introduction from './Page/Introduction';
import Stack from './Page/Stack'; 
import Project from './Page/Project';
import Info from './Page/Info';
import Loading from './Components/Loading';
import NotFound from './Components/NotFound';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const variants = {
    enter: direction => {
      return {
        x: direction > 0 ? 1000 : 1000,
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
        x: direction < 0 ? -1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  

  return (
    <div className='App'>
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Main />} />
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
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/loading' element={<Loading/>}/>
        </Routes>
      </AnimatePresence>

      {loading ? (<Loading />) : console.log('error!')}

    </div>
  );
}

export default App;
