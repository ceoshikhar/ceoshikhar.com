import { useStaticQuery, graphql } from "gatsby";

interface ISiteMetaData {
  color: string;
  defaultDescription: string;
  defaultTitle: string;
  language: string;
  site: string;
  siteUrl: string;
  titleTemplate: string;
  twitter: string;
}

export const useSiteMetadata = (): ISiteMetaData => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            color
            description
            title
            language
            site
            siteUrl
            titleTemplate
            twitter
          }
        }
      }
    `
  );
  const _meta = data.site.siteMetadata;
  const siteMetaData: ISiteMetaData = {
    color: _meta.color,
    defaultDescription: _meta.description,
    defaultTitle: _meta.title,
    language: _meta.language,
    site: _meta.site,
    siteUrl: _meta.siteUrl,
    titleTemplate: _meta.titleTemplate,
    twitter: _meta.twitter
  };

  return siteMetaData;
};
