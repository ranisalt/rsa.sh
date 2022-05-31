import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { meta, social, works } from "../config";
import "../styles/index.css";

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  font-family: sans-serif;
  height: 100vh;
  padding: 4.5rem 0;
  width: 100vw;
`;

const Hero = styled.div`
  text-align: center;

  & img {
    border-radius: 50%;
    box-shadow: 0 0 0.0625rem 0.0625rem #00000020,
      0 0 0.125rem 0.125rem #00000020, 0 0 0.25rem 0.25rem #00000020,
      0 0 0.5rem 0.5rem #00000020, 0 0 1rem 1rem #00000020;
  }

  & h1 {
    font-size: 2em;
    font-weight: 600;
    margin: 0.75em 0 0.5rem;
  }

  & a {
    color: #0076ff;
  }
`;

const SocialNetworks = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    display: inline-block;
  }

  & li + li {
    margin-inline-start: 1rem;
  }

  & li a {
    align-items: center;
    border: none;
    border-radius: 100vmax;
    color: #0076ff;
    display: flex;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    opacity: 0.5;
    transition: all 0.15s;
  }

  & li a:hover {
    background: #eee;
    opacity: 1;
  }

  & li a svg {
    margin-inline-end: 0.5rem;
  }
`;

const NotableWorks = styled.div`
  & .entry {
    padding: 1rem 0;
  }

  & .entry + .entry {
    border-top: 1px solid lightgray;
  }

  & .title {
    font-weight: semibold;
  }

  & .header + .description {
    margin-top: 0.5rem;
  }

  & .role {
    background-color: lightgray;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    margin-inline-start: 0.5rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`;

const Index = () => (
  <Container>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{meta.title}</title>
      {Object.entries(meta.tags).map(([name, content]) => (
        <meta name={name} content={content} />
      ))}
    </Helmet>

    <Hero>
      <img src={meta.heroImage} height={300} width={300} />

      <h1>{meta.heroTitle}</h1>
    </Hero>

    <SocialNetworks>
      {social.map(({ name, url, icon: Icon }) => (
        <li key={url}>
          <a href={url} target="_blank" rel="noopener">
            <Icon />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </SocialNetworks>

    <NotableWorks>
      {works.map(({ name, url, description, role }) => (
        <article key={url} className="entry">
          <header className="header">
            <a className="title" href={url} target="_blank" rel="noopener">
              {name}
            </a>

            {role && <span className="role">{role}</span>}
          </header>

          <div className="description">{description}</div>
        </article>
      ))}
    </NotableWorks>
  </Container>
);

export default Index;
