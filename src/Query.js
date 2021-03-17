const githubQuery = {
  query: `
  {
    viewer {
      login
      starredRepositories {
        nodes {
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