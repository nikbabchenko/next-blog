import Head from "next/head";
import { Layout } from "../../components/layout";

export default function About() {
    return (
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <article>
          <h1>About me</h1>
        </article>
      </Layout>
    )
  }