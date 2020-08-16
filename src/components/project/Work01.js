import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Work01Block = styled.div`
  width: 100%;
  background: #fff;
  margin-left: 300px;
  margin-top: 50px;
  .back {
    margin-left: 50px;
  }
  h3 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-top: 20px;
    margin-left: 50px;
  }
`;

function Work01() {
  return (
    <Work01Block>
      <NavLink className="back" to="/Project">
        돌아가기
      </NavLink>
      <h3>Todo List ver1,2 제작</h3>
    </Work01Block>
  );
}

export default Work01;
