import React from 'react';
import styled from 'styled-components';
import LeftMenu from './LeftMenu';

const LeftTabBlock = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100vh;
  background: #212529;
  box-shadow: 10px 0px 34px -15px rgba(0, 0, 0, 0.75);
  position: relative;
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

function LeftTab() {
  return (
    <LeftTabBlock>
      <h1>
        FRONT-END DEVELOPER
        <br />
        <strong>LEE SEUNG HYUN</strong>
      </h1>
      <LeftMenu />
      <div className="descript">
        <p>본 사이트는 상업적 목적이 없는 개인 포트폴리오 사이트 입니다.</p>
        <p>This site is made with React.js</p>
      </div>
    </LeftTabBlock>
  );
}

export default LeftTab;
