import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

const Main = styled.main`
  align-content: center;
  box-sizing: border-box;
  display: grid;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  hyphens: auto;
  line-height: 1.65;
  margin: 0 auto;
  max-width: 680px;
  min-height: 100vh;
  padding: 72px 0;
  text-align: center;
`;

const Index = () => (
  <Main>
    <Helmet>
      <title>Gatsby + Node.js (TypeScript) API</title>
    </Helmet>
    <h1>Gatsby + Node.js (TypeScript) API</h1>
    <h2>
      Deployed with{' '}
      <a
        href="https://vercel.com/docs"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vercel
      </a>
      !
    </h2>
    <p>
      <a
        href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
        target="_blank"
        rel="noreferrer noopener"
      >
        This project
      </a>{' '}
      is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
      directories, <code>/src</code> for static content and <code>/api</code>{' '}
      which contains a serverless{' '}
      <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
      <a href="/api/date">
        <code>api/date</code> for the Date API with Node.js (TypeScript)
      </a>
      .
    </p>
  </Main>
);

export default Index;
