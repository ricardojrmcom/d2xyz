import React, { useState, useEffect } from 'react';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContentProvider, type CMSTag } from '@d2xyz/cms';
import { BlogView } from '../../views';
import { sanity } from '../../cfg/sanity';

const queryCollections = `
  *[_type == 'collection' && title == 'Production']{
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
const queryTags = `
  *[_type == 'tag'] | order(name asc)
`;

export const getStaticProps: GetStaticProps = async () => {
  const collections = await sanity.fetch(queryCollections);
  return {
    props: {
      collections,
    },
    revalidate: 60,
  };
};

const CollectionsPage: NextPage = ({
  collections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [tags, tagsSet] = useState<string[]>([]);
  useEffect(() => {
    const fetchTags = async () => {
      const tags = await sanity.fetch(queryTags);
      tagsSet(tags.map((tag: CMSTag) => tag.name));
    };
    fetchTags();
  }, []);

  return (
    <ContentProvider
      content={collections}
      tags={{ tags }}
      lsid='onlydragons-blog'
      defaultViewOpts='items'
      onlyItems
    >
      <BlogView />
    </ContentProvider>
  );
};

export default CollectionsPage;
