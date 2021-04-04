module.exports = {
  siteMetadata: {
    site: `CEOShikhar`,
    title: `Shikhar Sharma's small space on the internet`,
    titleTemplate: `%s - CEOShikhar`,
    description: `My name is Shikhar Sharma AKA CEOShikhar. I am an entrepreneur, developer and an artist. Welcome to my small space on the internet.`,
    siteUrl: `https://www.ceoshikhar.com`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
  flags: {
    DEV_SSR: false,
  },
}
