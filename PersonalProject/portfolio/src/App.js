/* eslint-disable */
import './App.css';
import { styled } from 'styled-components';

function App() {
  return (
    <div className='App'>
      <nav id='navigation'>
        <div id='nav'>
          <div class='navEl' onclick="scrollToElement('1p')">
            MENU1
          </div>
          <div class='navEl' onclick="scrollToElement('2p')">
            MENU2
          </div>
          <div class='navEl' onclick="scrollToElement('3p')">
            MENU3
          </div>
          <div class='navEl' onclick="scrollToElement('4p')">
            MENU4
          </div>
        </div>
      </nav>
    <Page/>
    </div>
  );
}

function Page() {

  let divStyle = styled`
  width: 70vw;
  height: 100vh;
  background-color: white;
  `

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
