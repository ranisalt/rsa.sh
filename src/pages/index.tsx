import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import * as Icons from "../components/Icons";
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
      <title>ranieri - rsa.sh</title>
      <meta
        name="description"
        content={
          "Experienced software engineer with a demonstrated history of working in the computer software industry,  with a bachelor's degree focused in Computer Science. Skilled in C++, Javascript, Python, and Linux."
        }
      />
    </Helmet>

    <Hero>
      <img
        src="http://placekitten.com/300/300"
        height={300}
        width={300}
        alt="kitten"
        loading="lazy"
      />

      <h1>{"Ranieri Althoff"}</h1>
      <p>
        <span>{"Web developer at"}</span>{" "}
        <a href="https://doctype.se" target="_blank" rel="noopener">
          {"Doctype"}
        </a>
      </p>
    </Hero>

    <SocialNetworks>
      <li>
        <a href="https://github.com/ranisalt" target="_blank" rel="noopener">
          <Icons.GitHub />
          <span>{"GitHub"}</span>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/ranisalt"
          target="_blank"
          rel="noopener"
        >
          <Icons.LinkedIn />
          <span>{"LinkedIn"}</span>
        </a>
      </li>
    </SocialNetworks>

    <NotableWorks>
      <article className="entry">
        <header className="header">
          <a
            className="title"
            href="https://github.com/ranisalt/node-argon2"
            target="_blank"
            rel="noopener"
          >
            {"node-argon2"}
          </a>

          <span className="role">{"author"}</span>
        </header>

        <div className="description">
          {"Node.js bindings for Argon2 hashing algorithm."}
        </div>
      </article>

      <article className="entry">
        <header className="header">
          <a
            className="title"
            href="https://github.com/otland/forgottenserver"
            target="_blank"
            rel="noopener"
          >
            {"otland/forgottenserver"}
          </a>

          <span className="role">{"maintainer"}</span>
        </header>

        <div className="description">
          {"A free and open-source MMORPG server emulator written in C++."}
        </div>
      </article>
    </NotableWorks>
  </Container>
);

export default Index;
