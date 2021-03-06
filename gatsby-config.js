const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://scott-wells.com",
    title: "Scott Wells Portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        // path: "./src/images/",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
          },
        ]
      }
    },
  ],
};
