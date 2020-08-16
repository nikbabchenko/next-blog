import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import {NewsItem} from '../components/news';

export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headerDescription}>Software engineer in Lohika. Fan of writing readable code. Angular ninja. Father of 2 cats.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.grid}>
          {allPostsData.map(({ id, date, title, exceprt }) => (
            <NewsItem 
              id={id}
              date={date}
              title={title} 
              exceprt={exceprt} 
              className={utilStyles.listItem} key={id}>
            </NewsItem>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
