import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
  phone: '480px',
});

const AboutBlock = styled.div`
  width: 80%;
  margin-left: 300px;
  section {
    margin-left: 50px;
    margin-top: 50px;
  }
  section:nth-of-type(2) {
    margin-top: 30px;
  }
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
  }
  p {
    color: #212529;
    font-size: 16px;
    letter-spacing: 0.03rem;
    line-height: 24px;
    margin-top: 15px;
    margin-left: 10px;
    word-break: keep-all;
  }
  .email {
    color: #1c7ed6;
    cursor: pointer;
    position: relative;
  }
  .copied {
    background: #212529;
    bottom: -15px;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    height: 25px;
    left: 50%;
    opacity: 0;
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    transition: 0.5s;
    width: 60px;
  }
  .stacks {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 10px;
  }
  .stacks > span {
    background-size: cover;
    border: 2px solid #212529;
    border-radius: 5px;
    font-size: 0;
    height: 80px;
    margin-right: 10px;
    margin-bottom: 10px;
    position: relative;
    width: 80px;
  }
  .stacks .last {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .stacks .last span {
    margin-right: 5px;
    width: 7px;
    height: 7px;
    background: #212529;
    border-radius: 100%;
  }
  ${customMedia.lessThan('mdDesktop')`
    width: 90%;
    margin-left: 0px;
    margin-top:70px;
  `};
  ${customMedia.lessThan('phone')`
    margin-top:40px;
    section {
      margin-left: 30px;
      margin-top: 50px;
    }
    .stacks {
      width: 400px;
    }
  `};
`;

function About() {
  const copied = useRef(null);
  const stacks = useRef(null);
  const copydata = 'tmdgusdl58@gmail.com';
  function copyToClipboard() {
    var aux = document.createElement('input');
    aux.setAttribute('value', copydata);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  }
  function copyText(e) {
    e.preventDefault();
    copied.current.style = `bottom :-28px; opacity :1`;
    setTimeout(function () {
      copyToClipboard();
      copied.current.style = `bottom :-15px; opacity :0`;
    }, 500);
  }

  useEffect(() => {
    for (var i = 0; i < stacks.current.children.length; i++) {
      stacks.current.children[
        i
      ].style.backgroundImage = `url(https://github.com/lsh58/react_portfolio/blob/master/src/asset/stacks/${stacks.current.children[i].innerHTML}.png?raw=true)`;
    }
  }, []);

  return (
    <AboutBlock>
      <section>
        <h2>안녕하세요</h2>
        <p>
          만들기를 좋아하고 삶에서 일의 의미와 가치를 중요하게 생각하는
          이승현입니다.
          <br /> 프론트엔드 개발자로 일하기 위해 준비하고 있으며, 기술과
          디자인에 관심이 많습니다.
          <br /> 공통된 목적이 있는 사람들과 함께 지낼 때 행복감을 느끼며, 편한
          사람들과 마시는 맥주와 커피를 가장 좋아합니다.
          <br />
          저에 대해 궁금한 점이 있으시면&nbsp;
          <span className="email" onClick={copyText}>
            tmdgusdl58@gmail.com
            <span className="copied" ref={copied}>
              Copied!
            </span>
          </span>
          로 연락 주세요. 감사합니다.
        </p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <p>
          온라인 컨텐츠 제작 업무를 거쳐 현재는 프론트엔드 개발분야로 배움의
          폭을 넓히고 있습니다.
          <br /> HTML5, CSS3, Javascript(ES6), ajax, React, Sass 등을 활용한
          퍼블리싱과 프론트 영역 개발 경험이 있습니다.
          <br /> Javascript 언어를 가장 좋아하고, 현재는 React 공부에 매진하고
          있습니다.
        </p>
        <div className="stacks" ref={stacks}>
          <span>react</span>
          <span>js</span>
          <span>es6</span>
          <span>styled-components</span>
          <span>sass</span>
          <span>restfulapi</span>
          <span>html</span>
          <span>css</span>
          <span>ajax</span>
          <span>jquery</span>
          <span>php</span>
          <div className="last">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </AboutBlock>
  );
}

export default About;
