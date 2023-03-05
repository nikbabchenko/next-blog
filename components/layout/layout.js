import Head from "next/head";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";
import { siteTitle } from "./constants";
import styles from "./layout.module.css";

import { Button } from "@rmwc/button";
import classNames from "classnames";
import { Navbar } from "../shared";
import { HomeLayout } from "./home-layout";


const ArticleLayout = (children) => (
  <div>
    <Navbar />
    <main
      className={classNames(
        utilStyles.bodyText,
        styles.container
      )}
    >
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
