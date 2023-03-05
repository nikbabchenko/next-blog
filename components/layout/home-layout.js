import {
  faAngular, faCss3, faGithub, faHtml5, faInstagram, faLinkedin, faNodeJs, faReact
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@lottiefiles/react-lottie-player";
import cn from "classnames";
import Head from "next/head";
import Link from "next/link";
import DarkModeToggler from "../dark-mode-toggler";
import { siteTitle } from "./constants";
import devAnimation from "./dev-animation.json";
import styles from "./home-layout.module.css";

export const HomeLayout = (children) => {
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
      <div className={styles.home}>
        <nav className={styles.navBar}>
          <div className={cn(styles.logoSection, styles.navSection)}>
            <Link className={styles.logoLink} href="/">
              <FontAwesomeIcon className={styles.logo} icon={faCode} />
            </Link>
          </div>
          <div className={cn(styles.linksSection, styles.navSection)}>
            <Link className={styles.blogLink} href="/posts">
              Blog
            </Link>
            <Link className={styles.blogLink} href="/about">
              About
            </Link>
          </div>
          <div className={cn(styles.navSection, styles.socialLinks)}>
            <Link href="#">
              <FontAwesomeIcon
                className={styles.socialLink}
                icon={faLinkedin}
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                className={styles.socialLink}
                icon={faInstagram}
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon className={styles.socialLink} icon={faGithub} />
            </Link>
          </div>
          <div className={cn(styles.navSection, styles.contactLinkSection)}>
            <DarkModeToggler />
          </div>
        </nav>
        <main className={styles.main}>
          <article className={styles.article}>
            <div
              className={cn(styles.articleSection, styles.articleSectionImage)}
            >
              <Player
                autoplay
                className={styles.devAnimation}
                speed={1}
                loop
                src={devAnimation}
              ></Player>
            </div>
            <div
              className={cn(
                styles.articleSection,
                styles.articleSectionDescription
              )}
            >
              <div className={styles.technologies}>
                <FontAwesomeIcon className={styles.technology} icon={faAngular} />
                <FontAwesomeIcon className={styles.technology} icon={faNodeJs} />
                <FontAwesomeIcon className={styles.technology} icon={faReact} />
                <FontAwesomeIcon className={styles.technology} icon={faHtml5} />
                <FontAwesomeIcon className={styles.technology} icon={faCss3} />
              </div>
              <p>
                Hi there! My name is Nick Babchenko! <br /> Software engineer
                from Ukraine 🇺🇦
              </p>
              I&apos;m passionate about developing high-quality web
              applications, and is dedicated to staying up-to-date with the
              latest technologies and development practices to ensure that he is
              providing the best solutions possible.
            </div>
            <div
              className={cn(styles.articleSection, styles.articleSectionTitle)}
            >
              <div className={styles.articleTitle}>
                Frontend <br /> Developer
              </div>
            </div>
            <div
              className={cn(styles.articleSection, styles.articleSectionNav)}
            >
              <Link href="/posts" className={styles.articleBlogLink}>
                Blog {'>'}
              </Link>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};
