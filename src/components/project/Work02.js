import React from 'react';
import styled from 'styled-components';

const Work02Block = styled.div`
  width: 80%;
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 50px;
    margin-top: 50px;
  }
`;

function Work02() {
  return (
    <Work02Block>
      <h2>Work02</h2>
    </Work02Block>
  );
}

export default Work02;
