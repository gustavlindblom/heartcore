import Head from "next/head";
import Link from "next/link";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Layout from "../components/layout/layout";
import PageElements from "../components/pageElements/pageElements";
import UniqueSellingPoint from "../components/uniqueSellingPoint/uniqueSellingPoint";
import shortid from "shortid";

export default function Frontpage({ page }) {
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

            {page.uniqueSellingPoints &&
            <>
              <h2>{page.uniqueSellingPointsTitle}</h2>
              {page.uniqueSellingPoints.map(usp => (
                <UniqueSellingPoint key={shortid.generate()} usp={usp} />
              ))}
            </>
            }
          </Layout>
        </>
      );
}