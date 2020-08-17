import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectList({ date, title, link, desc, desc2, onClick }) {
  return (
    <li>
      <p className="date">{date}</p>
      <div className="title">
        <span>{title}</span>
        <NavLink to={link} onClick={onClick}>
          자세히보기
        </NavLink>
      </div>
      <p className="descript">{desc}</p>
      <p className="descript2">{desc2}</p>
    </li>
  );
}

export default ProjectList;
