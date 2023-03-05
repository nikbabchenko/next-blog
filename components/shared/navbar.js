import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Link from "next/link";
import DarkModeToggler from "../dark-mode-toggler";
import styles from "./navbar.module.css";


export const Navbar = () => {
    return (<nav className={styles.navBar}>
    <div className={cn(styles.logoSection, styles.navSection)}>
      <Link className={styles.logoLink} href="/">
        <FontAwesomeIcon className={styles.logo} icon={faCode} />
      </Link>
    </div>
    <div className={cn(styles.linksSection, styles.navSection)}>
      <Link className={styles.blogLink} href="/posts">
        Blog
      </Link>
      <Link className={styles.blogLink} href="/posts/welcome">
        About
      </Link>
    </div>
    <div className={cn(styles.navSection, styles.socialLinks)}>
      <Link target="_blank" href="https://www.linkedin.com/in/nick-babchenko-720a8942/">
        <FontAwesomeIcon className={styles.socialLink} icon={faLinkedin} />
      </Link>
      <Link target="_blank" href="#">
        <FontAwesomeIcon className={styles.socialLink} icon={faInstagram} />
      </Link>
      <Link target="_blank" href="https://github.com/nikbabchenko">
        <FontAwesomeIcon className={styles.socialLink} icon={faGithub} />
      </Link>
    </div>
    <div className={cn(styles.navSection, styles.contactLinkSection)}>
      <DarkModeToggler />
    </div>
  </nav>);
}

