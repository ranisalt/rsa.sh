import { Helmet } from 'react-helmet';
import '../styles/index.css';

const Index = () => (
  <main>
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
  </main>
);

export default Index;
