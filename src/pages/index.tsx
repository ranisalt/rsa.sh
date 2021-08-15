import styled from "@emotion/styled";
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

const Index = () => (
  <Container>
    <Hero>
      <img
        src="http://placekitten.com/300/300"
        height={300}
        width={300}
        alt="kitten"
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
  </Container>
);

export default Index;
