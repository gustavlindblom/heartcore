import Head from "next/head";
import Link from "next/link";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Layout from "../components/layout/layout";
import PageElements from "../components/pageElements/pageElements";

export default function Textpage({ page }) {
    return (
        <>
          <Head>
            <title>{page.name}</title>
          </Head>
    
          <Header>
            <Link href={'/'}>
                <a style={{ height: '100%' }}><img src={'/logo.png'} style={{ height: '100%' }} /></a>
            </Link>
            <Menu />
          </Header>
          
          <div id='menu'></div>
    
          <Layout>
            <PageElements pageElements={page.elements} />
          </Layout>
        </>
      );
}