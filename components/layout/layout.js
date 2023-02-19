import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import DarkModeToggler from "../dark-mode-toggler";
import { Button } from "@rmwc/button";

const name = "Nick Babchenko";
export const siteTitle = `Web dev's blog`;
const formatToInitials = (name) =>
  name
    .split(" ")
    .map((item) => item[0])
    .join("");

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
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fnick-babchenko.tech%2Fimages%2Fcontent.jpg`}
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
            <Link className={styles.profileInnerImage} href="/">
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <span>{formatToInitials(name)}</span>
            </Link>
          </div>
        )}

        <div className={styles.toggler}>
          <DarkModeToggler />
        </div>
      </header>
      <main
        className={`${
          !home ? styles.postContent + " " + utilStyles.bodyText : ""
        }`}
      >
        {children}

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
