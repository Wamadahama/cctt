let GitHubApi = require("github");

let github = new GitHubApi({
  debug: true,
  protocol: "https",
  host: "api.github.com",
});
