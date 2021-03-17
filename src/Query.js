const githubQuery = (pageCount, queryString) => {
  return{
    query: `
    {
      viewer {
        login
      }
      search(query: "${queryString} user:denisseai sort:updated-desc",
              type: REPOSITORY,
              first: ${pageCount}) {
        repositoryCount
        nodes {
          ... on Repository {
            name
            description
            id
            url
            viewerSubscription
          }
        }
      }
    }
    `,
  }
  
};

export default githubQuery;