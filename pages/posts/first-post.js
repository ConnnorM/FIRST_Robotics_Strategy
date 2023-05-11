import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
// get this function (Layout) from 2 directories back and into the layout component
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    {/* stuff inside head loads ASAP */}
    <Head>
        {/* this will change what the browser's tab says when you open that page */}
        <title>First Post</title>
    </Head>

{/* PROBABLY DELETE THIS LATER */}
    {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // once it's done oading, do this function
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}

    <h1>First Post</h1>
      <h2>
        {/* Creating a link to another page within the website
        This link goes from /pages/first-post back to localhost3000/ 
        and nothing so it's the home page or index.js */}
        {/* can also use <a href = "/" > to get a slower but full refresh */}
        {/* links prefetch code when they're seen in the viewport, so loading the
        page from the link is really fast since it's already done before you click it */}
        {/* use the a tag to link to external sources */}
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}