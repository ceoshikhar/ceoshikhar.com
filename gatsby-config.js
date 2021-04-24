const dotenv=require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    site: `ceoshikhar`,
    title: `Shikhar Sharma's small space on the internet`,
    author: `Shikhar Sharma`,
    titleTemplate: `%s - ceoshikhar`,
    description: `My name is Shikhar Sharma. I am an entrepreneur, developer and sometimes an artist. Welcome to my small space on the internet.`,
    siteUrl: `https://ceoshikhar.com`,
    language: `en`,
    color: `#0A0A0A`,
    twitter: 'ceoshikhar',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
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
        theme_color: `#298FCA`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        cache_busting_mode: `none`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins:400,700`,
          `Vollkorn:400,700`,
          `Roboto:300,400,500,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
  ],
  flags: {
    DEV_SSR: false,
  }
}
