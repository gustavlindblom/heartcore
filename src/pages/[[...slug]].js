import { getAllPages, root, getPageFromUrl } from '../../lib/umbracoApi';
import DynamicPage from '../pageTypes/dynamicPage';

export default function Page({ content }) {
  return (
    <DynamicPage page={content} />
  );
}

export async function getStaticProps({ params }) {
  const content = await getPageFromUrl(urlArrayToString(params.slug));
  const notFound = content ? false : true;
  return {
    props: { content },
    revalidate: 60,
    notFound,
  };
}

export async function getStaticPaths() {
  const pages = await getAllPages();
  const paths = pages.map(url => ({
    params: {
      slug: urlStringToArray(url)
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

const urlArrayToString = (url) => url ? `/${url.join('/')}/` : '';
const urlStringToArray = (url) => url.split('/').filter((urlPart) => urlPart === 'home' ? '' : urlPart);