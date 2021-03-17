const githubQuery = {
  query: `
  {
    viewer {
      login
    }
    search(query: "user:denisseai sort:updated-desc", type: REPOSITORY, first: 20) {
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
};

export default githubQuery;