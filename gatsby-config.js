module.exports = {
  siteMetadata: {
    site: `CEOShikhar`,
    title: `Shikhar Sharma's small space on the internet`,
    titleTemplate: `%s - CEOShikhar`,
    description: `My name is Shikhar Sharma AKA CEOShikhar. I am an entrepreneur, developer and an artist. Welcome to my small space on the internet.`,
    siteUrl: `https://ceoshikhar.com`,
    language: `en`,
    color: `#0A0A0A`,
    twitter: 'ceoshikhar',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/src/routes.ts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shikhar Sharma's small space on the internet`,
        short_name: `CEOShikhar`,
        start_url: `/`,
        background_color: `#0A0A0A`,
        theme_color: `#047DC4`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ceoshikhar.com`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://ceoshikhar.com`,
        sitemap: `https://ceoshikhar.com/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
