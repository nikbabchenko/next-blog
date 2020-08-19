import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import DarkModeToggler from "./dark-mode-toggler";
import {Button} from "@rmwc/button";

const name = "Nick Babchenko";
export const siteTitle = `Web dev's blog`;

export default function Layout({ children, home }) {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Web developer's blog" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </div>
        ) : (
          <div>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </div>
        )}

        <aside className={styles.toggler}>
          <DarkModeToggler />
        </aside>
      </header>
      <main className={`${utilStyles.bodyText} ${!home ? styles.postContent : ''}`}>{children}
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <Button raised>← Back to home</Button>
          </Link>
        </div>
      )}
      </main>
    </div>
  );
}
