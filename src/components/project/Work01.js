import React from 'react';
import styled from 'styled-components';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

const Work01Block = styled.div`
  width: 100%;
  background: #fff;
  margin-left: 300px;
  margin-top: 50px;
  .back {
    margin-left: 50px;
    font-weight: 600;
    display: flex;
    letter-spacing: 0.05rem;
  }
  .backicon {
    margin-right: 5px;
  }
  .date {
    margin-top: 30px;
    margin-left: 60px;
    letter-spacing: 0.05rem;
  }
  h3 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-top: 10px;
    margin-left: 50px;
    letter-spacing: 0.05rem;
  }
  .descript {
    margin-left: 50px;
    margin-top: 20px;
    line-height: 1.5rem;
    letter-spacing: 0.05rem;
  }
  .image-gallery {
    margin-top: 20px;
    width: 50%;
    margin-left: 50px;
  }
  .image-gallery-play-button {
    display: none;
  }
  .image-gallery-svg {
    width: 25px;
  }
`;
const images = [
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/react01.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/react01thum.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/react02.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/react02thum.png?raw=true',
  },
];

function Work01() {
  return (
    <Work01Block>
      <NavLink className="back" to="/Project">
        <FaRegHandPointLeft className="backicon" />
        돌아가기
      </NavLink>
      <p className="date">2020.07-2020.08</p>
      <h3>Todo List ver1,2 제작</h3>
      <p className="descript">
        React Hooks를 사용하여 todolist를 제작하였습니다.
        <br />
        ver2에서는 context api를 활용하여 데이터를 전달하도록 하였습니다.
      </p>
      <ImageGallery
        items={images}
        autoPlay={true}
        thumbnailPosition={'right'}
      />
    </Work01Block>
  );
}

export default Work01;
