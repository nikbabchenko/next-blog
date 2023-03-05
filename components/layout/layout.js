import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import DarkModeToggler from "../dark-mode-toggler";
import styles from "./layout.module.css";
import { siteTitle } from "./constants";


import { Button } from "@rmwc/button";
import { HomeLayout } from "./home-layout";

const name = "Nick Babchenko";


const formatToInitials = (name) =>
  name
    .split(" ")
    .map((item) => item[0])
    .join("");

const ArticleLayout = (children) => (
  <div className={`${styles.container}`}>
    <header className={styles.header}>
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

      <div className={styles.toggler}>
        <DarkModeToggler />
      </div>
    </header>
    <main className={styles.postContent + " " + utilStyles.bodyText}>
      {children}

      <div className={styles.backToHome}>
        <Link href="/">
          <Button raised>← Back to home</Button>
        </Link>
      </div>
    </main>
  </div>
);

export default function Layout({ children, home }) {
  return (
    <>
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
      {home ? HomeLayout(children) : ArticleLayout(children)}
    </>
  );
}
