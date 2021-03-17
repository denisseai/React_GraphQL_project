const githubQuery = (pageCount, queryString, paginationKeyword, paginationString) => {
  return{
    query: `
    {
      viewer {
        login
      }
      search(query: "${queryString} user:denisseai sort:updated-desc",
              type: REPOSITORY,
              ${paginationKeyword}: ${pageCount},
              ${paginationString}) {
        repositoryCount
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
    `,
  }
  
};

export default githubQuery;