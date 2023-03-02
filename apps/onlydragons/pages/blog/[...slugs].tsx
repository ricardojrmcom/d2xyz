import React from 'react';
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import { type ParsedUrlQuery } from 'querystring';
import {
  CMSContentOverview,
  type CMSCollection,
  type CMSItem,
} from '@d2xyz/cms';
import { MetaTags } from '@d2xyz/ui/src/utils';
import { PageLayout } from '../../components/PageLayout';
import { sanity } from '../../cfg/sanity';

const querySlugs = `
  *[_type == 'collection' && title == 'Production']{
    _id,
    slug {
      current
    },
    items[]->{
      _id,
      slug{
        current
      }
    }
  }
`;

const queryCollection = `
  *[_type == 'collection' && title == 'Production' && slug.current == $slug][0]{
    _id, body, description, featured, premium, 
    publishedAt, slug, author->{
      name, slug, image{
          asset->{url}
        }
    }, link, external, title, video, image{
      asset->{url}
    },
    items[]->{
      _id, body, description, featured, premium, 
      publishedAt, slug, author->{
      name, slug, image{
          asset->{url}
        }
    }, link, external, title, video, image{
        asset->{url}
      },
      tags[]->{name}
    },
    tags[]->{name}
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: (
    | string
    | {
        params: ParsedUrlQuery;
      }
  )[] = [];

  const collections: CMSCollection[] = await sanity.fetch(querySlugs);

  collections.forEach((collection) => {
    if (collection.items) {
      collection.items.forEach((item) => {
        paths.push({
          params: {
            slugs: [item.slug.current],
          },
        });
      });
    }
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let result = null;
  let collection = null;

  if (params?.slugs) {
    const slugs = params.slugs as string[];
    if (slugs.length === 1) {
      collection = await sanity.fetch(queryCollection, {
        slug: 'production',
      });
      const document = collection.items.find((item: CMSItem) => {
        return item.slug.current === slugs[0];
      });
      result = document;
    }
  }

  if (!result) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }

  return {
    props: { result },
    revalidate: 60,
  };
};

const BlogPage: NextPage = ({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout>
      <MetaTags title={`${result.title} | Only Dragons`} />
      <CMSContentOverview item={result} />
    </PageLayout>
  );
};

export default BlogPage;
