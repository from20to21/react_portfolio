import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
});

const ContactBlock = styled.div`
  width: 80%;
  height: 100vh;
  margin-left: 300px;
  .contact__wrapper {
    margin-left: 70px;
    margin-top: 200px;
  }
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 1.7rem;
    margin-left: -20px;
  }
  p {
    margin-top: 30px;
    letter-spacing: 0.05rem;
  }
  ul {
    margin-top: 30px;
  }
  ul li {
    margin-top: 20px;
    font-weight: 400;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
  }
  ul li strong {
    font-weight: 600;
    margin-right: 20px;
    letter-spacing: 0.05rem;
  }
  ${customMedia.lessThan('mdDesktop')`
    width: 90%;
    margin-left: 0px;
    margin-top:70px;
    .contact__wrapper {
    margin-left: 70px;
    margin-top: 100px;
  }
  `};
`;

function Contact() {
  return (
    <ContactBlock>
      <div className="contact__wrapper">
        <h2>Contact me</h2>
        <p>궁금하신 점이 있다면 언제든지 연락주시기 바랍니다.</p>
        <ul>
          <li>
            <strong>이름</strong>이승현
          </li>
          <li>
            <strong>전화번호</strong>010.4140.1263
          </li>
          <li>
            <strong>이메일</strong>tmdgusdl58@gmail.com<span>copy</span>
          </li>
          <li>
            <strong>깃허브</strong>
            <a
              href="http://github.com/lsh58"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://github.com/lsh58
            </a>
          </li>
        </ul>
        <p>당신과 함께 성장하고 싶습니다.</p>
      </div>
    </ContactBlock>
  );
}

export default Contact;
