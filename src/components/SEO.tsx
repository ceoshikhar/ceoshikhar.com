import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

export interface ISEOProps {
  pathname: string;
  article?: boolean;
  description?: string;
  title?: string;
}

export const SEO: React.FC<ISEOProps> = (props) => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "thumbnail.png" }) {
        publicURL
      }
    }
  `);

  const {
    color,
    defaultDescription,
    defaultTitle,
    language,
    site,
    siteUrl,
    titleTemplate,
    twitter,
    author
  } = useSiteMetadata();

  const { article, description, pathname, title } = props;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: file.publicURL,
    url: `${siteUrl}${pathname}`,
    twitter,
    author
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} defer={false}>
      <html lang={language} />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <meta
        name="keywords"
        content="Shikhar Sharma, Shikhar, Sharma, CEOShikhar"
      />
      <meta name="theme-color" content={color} />
      <meta name="application-name" content={site} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={`website`} />
      {article && <meta property="og:type" content="article" />}

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={site} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
