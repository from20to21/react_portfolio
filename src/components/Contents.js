import React, { useRef } from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  width: 80%;
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
  }
  .email {
    color: #1c7ed6;
    cursor: pointer;
    position: relative;
  }
  .copied {
    background: #1c7ed6;
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
`;

function Contents() {
  const copied = useRef(null);

  function copyText(e) {
    e.preventDefault();
    copied.current.style = `bottom :-28px; opacity :1`;
    setTimeout(function () {
      copied.current.style = `bottom :-15px; opacity :0`;
    }, 500);
  }

  return (
    <ContentsBlock>
      <section>
        <h2>안녕하세요</h2>
        <p>
          만들기를 좋아하고 삶에서 일의 의미와 가치를 중요하게 생각하는
          이승현입니다.
          <br /> 프론트엔드 개발자로 일하기 위해 준비하고 있으며, 기술과
          비지니스에 관심이 많습니다.
          <br /> 공통된 목적이 있는 사람들과 함께 지낼 때 행복감을 느끼며, 편한
          사람들과 마시는 맥주와 커피를 가장 좋아합니다.
          <br />
          저에 대해 궁금한 점이 있으시면{' '}
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
      </section>
    </ContentsBlock>
  );
}

export default Contents;
