import Head from "next/head";
import { Layout, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { NewsItem } from "../components/news";
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headerDescription}>
          Software engineer at{" "}
          <a href="https://www.lohika.com.ua/" target="_blank">
            Lohika
          </a>
          . Fan of writing readable code. Angular Ninja 🏂. PS gamer. 🎮.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.grid}>
          {allPostsData.map((props) => (
            <NewsItem
              {...props}
              className={utilStyles.gridItem}
              key={props.id}
            ></NewsItem>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
