import React, { useRef } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Work01 from './project/Work01';
import Work02 from './project/Work02';
import Work03 from './project/Work03';

const ProjectBlock = styled.div`
  width: 80%;
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 50px;
    margin-top: 50px;
  }
`;

function Project() {
  const listBox = useRef(null);
  function hideListBox() {
    listBox.current.style = `display:none`;
  }

  return (
    <ProjectBlock>
      <div ref={listBox} className="project__list" onClick={hideListBox}>
        <h2>Project List</h2>
        <NavLink to="/project/work01">Work01</NavLink>
        <NavLink to="/project/work02">Work02</NavLink>
        <NavLink to="/project/work03">Work03</NavLink>
      </div>
      <Route path="/project/work01" component={Work01} />
      <Route path="/project/work02" component={Work02} />
      <Route path="/project/work03" component={Work03} />
    </ProjectBlock>
  );
}

export default Project;
