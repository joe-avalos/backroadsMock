/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `BackRoads`,
    description: `Explore awesome worldwide tours & discover what makes them unique. Forget your daily routine & say yes to adventure.`,
    author: `joe-avalos`,
    twitterUsername: `John Doe`,
    image: `/defaultBcg.jpeg`,
    siteUrl: `https://mockbackroadsjbaa.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://mockbackroadsjbaa.netlify.com`,
        sitemap: `https://mockbackroadsjbaa.netlify.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
