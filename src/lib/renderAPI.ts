import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../keystatic.config";

export const GitReader = createGitHubReader(keystaticConfig, {
  repo: 'summit-dm/keystatic-test',
  token: import.meta.env.GITHUB_PAT,
});

// console.log(GitReader)