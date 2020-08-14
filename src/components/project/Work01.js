import React from 'react';
import styled from 'styled-components';

const Work01Block = styled.div`
  width: 80%;
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 50px;
    margin-top: 50px;
  }
`;

function Work01() {
  return (
    <Work01Block>
      <h2>Work01</h2>
    </Work01Block>
  );
}

export default Work01;
