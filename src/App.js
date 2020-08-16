import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Work01 from './components/Project/Work01';
import Work02 from './components/Project/Work02';
import Work03 from './components/Project/Work03';
import Work04 from './components/Project/Work04';
import Work05 from './components/Project/Work05';
import './App.css';

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
  h1 {
    margin-top: 50px;
    margin-left: 40px;
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
`;

const LeftMenuBlock = styled.div`
  margin-top: 60px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
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
`;

function App() {
  return (
    <PageTemplate>
      <Router>
        <LeftTabBlock>
          <h1>
            FRONT-END DEVELOPER
            <br />
            <strong>LEE SEUNG HYUN</strong>
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
          <Route path="/project" component={Project} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/Project/work01" component={Work01} />
          <Route path="/Project/work02" component={Work02} />
          <Route path="/Project/work03" component={Work03} />
          <Route path="/Project/work04" component={Work04} />
          <Route path="/Project/work05" component={Work05} />
        </Switch>
      </Router>
    </PageTemplate>
  );
}

export default App;
