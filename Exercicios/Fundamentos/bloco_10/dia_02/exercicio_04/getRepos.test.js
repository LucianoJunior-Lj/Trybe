const getRepos = require('./getRepos');

describe('testing getRepos function', () => {
  it('Should contain the repositories', async () => {
    const repositories = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repositories).toContain('sd-01-week4-5-project-todo-list');
    expect(repositories).toContain('sd-01-week4-5-project-meme-generator');
  });
});
