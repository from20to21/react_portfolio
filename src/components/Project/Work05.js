import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

const Work05Block = styled.div`
  width: 100%;
  background: #fff;
  margin-left: 300px;
  margin-top: 50px;
  .back {
    margin-left: 50px;
    font-weight: 600;
    display: flex;
    align-items: center;
    letter-spacing: 0.05rem;
  }
  .backicon {
    font-size: 1.4rem;
  }
  .date {
    margin-top: 20px;
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
  h3 a {
    background: #212529;
    color: #fff;
    margin-left: 7px;
    padding: 4px 7px;
    border-radius: 5px;
    letter-spacing: 0.03rem;
    font-size: 0.8rem;
    font-weight: 100;
    cursor: pointer;
  }
  h3 a:first-child {
    margin-left: 15px;
  }
  .descript {
    font-size: 0.9rem;
    margin-left: 50px;
    margin-top: 20px;
    line-height: 1.7rem;
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
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml01.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_01.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml02.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_02.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml03.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_03.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml04.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_04.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml05.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_05.png?raw=true',
  },
  {
    original:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/image/bml06.png?raw=true',
    thumbnail:
      'https://github.com/lsh58/react_portfolio/blob/master/src/asset/thum/bmlthum_06.png?raw=true',
  },
];

function Work05() {
  return (
    <Work05Block>
      <NavLink className="back" to="/Project">
        <FaAngleLeft className="backicon" />
        돌아가기
      </NavLink>
      <p className="date">2020.04-2020.05</p>
      <h3>
        뷰티풀민트라이프 웹사이트
        <a
          href="http://tmdgus508.dothome.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          웹페이지 바로가기
        </a>
        <a
          href="https://github.com/lsh58/bml/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 바로가기
        </a>
      </h3>
      <ImageGallery items={images} thumbnailPosition={'right'} />
      <p className="descript">
        - 개발언어 : Html / css / jQuery / JavaScript
        <br />- 로딩화면 구현
        <br />- Parallax 기능 구현
        <br />- Json을 이용한 데이터 전환 구현 ( 탭에 따른 내용 전환기능)
      </p>
    </Work05Block>
  );
}

export default Work05;
