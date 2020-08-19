import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Work01 from './components/Project/Work01';
import Work02 from './components/Project/Work02';
import Work03 from './components/Project/Work03';
import Work04 from './components/Project/Work04';
import Work05 from './components/Project/Work05';
import Work06 from './components/Project/Work06';
import './App.css';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
});

const PageTemplate = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const LeftTabBlock = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100vh;
  background: #212529;
  box-shadow: 10px 0px 34px -15px rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 50px;
    margin-left: 40px;
  }
  h1 a {
    color: #ffffff;
    font-size: 14px;
    font-weight: lighter;
    letter-spacing: 0.05rem;
  }
  h1 strong {
    margin-top: 2px;
    font-size: 22px;
    color: #ffffff;
    font-weight: bold;
  }
  .descript {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
  }
  p {
    text-align: center;
    font-size: 10px;
    color: #ffffff;
    font-weight: lighter;
    margin-bottom: 5px;
    letter-spacing: 0.02rem;
  }
  ${customMedia.lessThan('mdDesktop')`
    width:100%;
    height:70px;
    flex-direction:row;
    h1 {
      margin-top: 15px;
      min-width: 150px;
    }
    h1 a{
      font-size:12px;
    }
    h1 strong{
      font-size:16px;
    }
    .descript {
      display:none;
    }
  `};
`;

const LeftMenuBlock = styled.div`
  margin-top: 60px;
  margin-left: 40px;
  position: relative;
  width: 60%;
  nav {
    display: flex;
    flex-direction: column;
  }
  nav a {
    color: #999;
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.05rem;
    margin-bottom: 50px;
    cursor: pointer;
    padding-left: 15px;
  }
  nav a.selected {
    color: #fff;
    font-weight: bold;
    padding-left: 10px;
    border-left: 5px solid #fff;
    transition: border-left 0.5s;
  }
  ${customMedia.lessThan('mdDesktop')`
    margin-top: 25px;
    nav {
      display: flex;
      flex-direction: row;
    }
    nav a{
      margin-left:100px;
    }
    nav a.selected{
      border:none;
    }
  `};
  ${customMedia.lessThan('tablet')`
  nav a{
      margin-left:50px;
    }
  `};
`;

function App() {
  return (
    <PageTemplate>
      <Router>
        <LeftTabBlock>
          <h1>
            <NavLink to="/react_portfolio" exact activeClassName="selected">
              FRONT-END DEVELOPER
              <br />
              <strong>LEE SEUNG HYUN</strong>
            </NavLink>
          </h1>
          <LeftMenuBlock>
            <nav>
              <NavLink to="/react_portfolio" exact activeClassName="selected">
                ABOUT
              </NavLink>
              <NavLink to="/Project" activeClassName="selected">
                PROJECT
              </NavLink>
              <NavLink to="/Contact" activeClassName="selected">
                CONTACT
              </NavLink>
            </nav>
          </LeftMenuBlock>
          <div className="descript">
            <p>본 사이트는 상업적 목적이 없는 개인 포트폴리오 사이트 입니다.</p>
            <p>This site is made with React.js</p>
          </div>
        </LeftTabBlock>
        <Switch>
          <Route path="/react_portfolio" component={About} exact />
          <Route path="/Project" component={Project} exact />
          <Route path="/Contact" component={Contact} />
          <Route path="/Project/work01" component={Work01} />
          <Route path="/Project/work02" component={Work02} />
          <Route path="/Project/work03" component={Work03} />
          <Route path="/Project/work04" component={Work04} />
          <Route path="/Project/work05" component={Work05} />
          <Route path="/Project/work06" component={Work06} />
        </Switch>
      </Router>
    </PageTemplate>
  );
}

export default App;
