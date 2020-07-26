module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby Startup/Hackathon Starter`,
    defaultDescription: `A starter for building a startup or hackathon project`,
    siteUrl: `https://example.com`,
    defaultImage: "./static/favicon.ico",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: "",
        variables: {},
        graphQLQuery: `query { 
            viewer {
            repositories(first: 18, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      `,
      },
    },
  ],
}
