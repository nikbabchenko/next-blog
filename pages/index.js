import Head from "next/head";
import { Layout, siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { NewsItem } from "../components/news";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177868691-1"></script>
      <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-177868691-1');`
      }}
      >
      </script>

        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headerDescription}>
          Software engineer from Ukraine 🇺🇦. <br /> Fan of writing readable code. Angular Ninja 🥷. <br />
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
