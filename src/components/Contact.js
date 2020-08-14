import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
  width: 80%;
  h2 {
    color: #212529;
    font-weight: 900;
    font-size: 2rem;
    margin-left: 50px;
    margin-top: 50px;
  }
`;

function Contact() {
  return (
    <ContactBlock>
      <h2>Contact</h2>
    </ContactBlock>
  );
}

export default Contact;
