const githubQuery = {
  query: `
  {
    viewer {
      login
    }
    search(query: "user:denisseai sort:updated-desc", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          description
          id
          url
        }
      }
    }
  }
  `,
};

export default githubQuery;