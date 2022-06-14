import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';
import Layout from '../components/layout/layout';

export default function Login({ content }) {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Header>
                <Link href={'/'}>
                    <a style={{ height: '100%' }}><img src={'/logo.png'} style={{ height: '100%' }} /></a>
                </Link>
                <Menu />
            </Header>
            <div id='menu'></div>
            <Layout>
                <h2>Login needed</h2>
            </Layout>
        </>
    )
}