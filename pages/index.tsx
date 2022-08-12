import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { meta, social, works } from "../config";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>{meta.title}</title>
      {Object.entries(meta.tags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
    </Head>

    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src={meta.heroImage}
          height={300}
          width={300}
          alt="profile picture"
        />
      </div>

      <h1>{meta.heroTitle}</h1>
    </div>

    <ul className={styles.socialNetworks}>
      {social.map(({ name, url, icon: Icon }) => (
        <li key={url}>
          <a href={url} target="_blank" rel="noreferrer">
            <Icon />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>

    <div className={styles.notableWorks}>
      {works.map(({ name, url, description, role }) => (
        <article key={url} className={styles.entry}>
          <header className={styles.header}>
            <a
              className={styles.title}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>

            {role && <span className={styles.role}>{role}</span>}
          </header>

          <div className={styles.description}>{description}</div>
        </article>
      ))}
    </div>
  </div>
);

export default Home;
