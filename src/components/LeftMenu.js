import React, { useRef } from 'react';
import styled from 'styled-components';

const LeftMenuBlock = styled.div`
  margin-top: 60px;
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  position: relative;
  li {
    color: #999;
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.05rem;
    margin-bottom: 50px;
    cursor: pointer;
  }
  li.selected {
    color: #fff;
    font-weight: bold;
  }
  span {
    width: 5px;
    height: 18px;
    background: #fff;
    position: absolute;
    left: -12.5px;
    top: 0;
    transition: 0.5s;
  }
`;

function LeftMenu() {
  const menuWrapper = useRef(null);
  const menuSelector = useRef(null);

  function selectToggle(e) {
    e.preventDefault();
    for (var i = 0; i < menuWrapper.current.children.length; i++) {
      menuWrapper.current.children[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
    menuSelector.current.style = `top :${e.target.offsetTop}px`;
  }

  return (
    <LeftMenuBlock>
      <ul ref={menuWrapper}>
        <li className="selected" onClick={selectToggle}>
          ABOUT
        </li>
        <li onClick={selectToggle}>PROJECT</li>
        <li onClick={selectToggle}>CONTACT</li>
      </ul>
      <span ref={menuSelector}></span>
    </LeftMenuBlock>
  );
}

export default LeftMenu;
