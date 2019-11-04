exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    {
      allContentfulReview {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    reporter.panic("Error loading data")
    return
  }

  const reviews = results.data.allContentfulReview.edges

  reviews.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/anime/${slug}/`,
      component: require.resolve("./src/templates/anime.js"),
      context: { slug },
    })
  })
}
