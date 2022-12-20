import Cta from 'components/Cta';
import Gallery from 'components/Gallery';
import Group from 'components/Group';
import Hero from 'components/Hero';
import { getHomePage } from 'components/queries/queries';
import { homepageRevalidationTtl } from 'config';
import { getStorefront } from 'features/Storefront/transforms';
import { StorefrontChild } from 'features/Storefront/types';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { isNotNullish } from 'utils/types';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ storefront }) => {
  function storefrontChildToComponent() {
    const StorefrontComponent = (component: StorefrontChild, index = 0) => {
      switch (component.__typename) {
        case 'HeroComponent':
          return <Hero key={index} {...component} />;
        case 'TextSection':
          return <Group key={index} {...component} />;
        case 'Cta':
          return <Cta key={index} {...component} />;
        case 'Gallery':
          return <Gallery key={index} {...component} />;

        default:
          return null;
      }
    };

    return StorefrontComponent;
  }

  const components = storefront.components?.filter(isNotNullish).map(storefrontChildToComponent());

  return <Layout> {components}</Layout>;
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async () => {
  const { data, error } = await apolloClient.query<GetStorefrontQueryResponse>({
    query: getHomePage
  });

  const storefront = getStorefront(data);

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  if (!storefront) {
    return {
      notFound: true
    };
  }

  return {
    revalidate: homepageRevalidationTtl,
    props: {
      storefront
    }
  };
};

export default HomePage;
