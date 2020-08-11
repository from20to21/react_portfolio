import React from 'react';
import styled from 'styled-components';

const PageTemplateBlock = styled.div`
  width: 100%;
  display: flex;
`;

function PageTemplate({ children }) {
  return <PageTemplateBlock>{children}</PageTemplateBlock>;
}

export default PageTemplate;
