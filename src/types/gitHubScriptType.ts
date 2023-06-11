import { context } from '@actions/github';
import { Octokit } from '@octokit/rest';

const ocktokit = new Octokit();

export interface GithubScriptInput {
  context: typeof context;
  github: {
    rest: typeof ocktokit;
  };
}
