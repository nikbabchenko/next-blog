import {Layout} from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import DisqusComments from '../../components/disqus-comments/disqus-comments'
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/layout/layout.module.css';
import ReactMarkdown from "react-markdown/with-html";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {xonokai} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import cn from 'classnames';

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter style={xonokai} showLineNumbers language={language}>{value}</SyntaxHighlighter>;
};

const imagesClasses = {
  centered: 'responsive-image--centered',
  responsive: 'responsive-image'
}

const Image = (props) => {
  const {src} = props;
  const hash = src.split('#')[1];

  return <img {...props} className={cn({
    'responsive-image': true,
    [imagesClasses.centered]: hash === 'centered'
  })} />
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.postContent}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown  renderers={{ code: CodeBlock, image: Image }} escapeHtml={false} source={postData.content} />
        <DisqusComments post={postData} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
