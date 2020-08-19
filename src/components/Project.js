import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import ProjectList from './ProjectList';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
  phone: '480px',
});

const ProjectBlock = styled.div`
  width: 80%;
  margin-left: 300px;
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 50px;
    margin-top: 50px;
  }
  ul {
    margin: 50px 0 50px 80px;
  }
  li {
    margin-top: 30px;
    position: relative;
  }
  li .date {
    margin-left: 5px;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
  }
  li .title {
    display: flex;
    align-items: center;
    margin-top: 5px;
    letter-spacing: 0.05rem;
  }
  li .title span {
    font-size: 1.3rem;
    font-weight: 900;
    letter-spacing: 0.05rem;
  }
  li .title a {
    border: 2px solid #212529;
    font-size: 0.8rem;
    padding: 4px 5px;
    font-weight: bold;
    margin-left: 15px;
  }
  li .title a:hover {
    background: #212529;
    color: #fff;
  }
  li .descript {
    margin-top: 7px;
    width: 50%;
    line-height: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.03rem;
    word-break: keep-all;
  }
  li .descript2 {
    line-height: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.03rem;
    word-break: nowrap;
  }
  ${customMedia.lessThan('mdDesktop')`
    width: 90%;
    margin-left: 0px;
    margin-top:70px;
    ul {
    margin: 30px 0 50px 80px;
    }
    li .descript {
      width: 100%;
    }
  `};
  ${customMedia.lessThan('phone')`
    margin-top:40px;
    h2 {
      margin-left: 30px;
    }
    ul {
      margin: 30px 0 50px 30px;
    }
    li .title {
    margin-top: 10px;
      display: flex;
      flex-direction:column;
      align-items: flex-start;
    }
    li .title a {
      margin-top: 10px;
      margin-left: 0px;
    }
  `};
`;

function Project() {
  const projectList = [
    {
      id: 1,
      date: '2020.07-2020.08',
      title: 'Todo List ver2 제작',
      link: '/Project/work01',
      desc: 'React Hooks를 사용하여 todolist를 제작하였습니다.',
      desc2:
        'Ver1보다 다양한 Hooks를 활용하고, context api를 통해 데이터를 전달하도록 하였습니다.',
    },
    {
      id: 2,
      date: '2020.07-2020.08',
      title: 'Todo List ver1 제작',
      link: '/Project/work02',
      desc: 'React Hooks를 사용하여 todolist를 제작하였습니다.',
      desc2: 'Add, delete, update 기능을 구현했습니다.',
    },
    {
      id: 3,
      date: '2020.06.-2020.07.',
      title: 'Wavve Clone Page 제작',
      link: '/Project/work03',
      desc: 'React를 활용한 첫번째 작업물입니다.  ',
      desc2:
        ' 기존 사이트의 일반사이트를 React를 사용해서 작동하도록 작업하였습니다. ',
    },
    {
      id: 4,
      date: '2020.05.-2020.06.',
      title: 'ZARA 모바일페이지 리뉴얼 ',
      link: '/Project/work04',
      desc: 'ZARA 쇼핑몰 모바일 사이트를 리뉴얼 하였습니다. ',
      desc2:
        '메인페이지에서 Parallax 기능 구현과 Json을 이용한 데이터 전환기능을 구현하였습니다.',
    },
    {
      id: 5,
      date: '2020.04.-2020.05.',
      title: '뷰티풀민트라이프 웹사이트 제작',
      link: '/Project/work05',
      desc: '뷰티풀민트라이프 웹사이트를 디자인부터 작업하여 제작하였습니다.',
      desc2:
        '그누보드를 활용한 게시판을 구현하였고, 갤러리 기능 등을 순수javascript로 구현하였습니다.',
    },
    {
      id: 6,
      date: '2020.03.-2020.04.',
      title: '한국관광공사 웹사이트 리뉴얼 ',
      link: '/Project/work06',
      desc: '관공서 사이트인 한국관광공사 사이트를 리뉴얼하였습니다.',
      desc2: '팀프로젝트로 진행하였고, 첫 웹사이트 작업물입니다.',
    },
  ];

  return (
    <ProjectBlock>
      <div className="project__list">
        <h2>Project List</h2>
        <ul>
          {projectList.map((v) => {
            return (
              <ProjectList
                key={v.id}
                date={v.date}
                title={v.title}
                link={v.link}
                desc={v.desc}
                desc2={v.desc2}
              />
            );
          })}
        </ul>
      </div>
    </ProjectBlock>
  );
}

export default Project;
