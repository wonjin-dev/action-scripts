import { GithubScriptInput } from './types/gitHubScriptType';

function _deleteBranch(githubScript: GithubScriptInput) {
  try {
    const { head } = githubScript.context.payload.pull_request;
    const headRef: string = head?.ref;
    if (headRef !== 'main' && headRef !== 'develop') {
      console.log('action');
      const { repo, owner } = githubScript.context.repo;
      const ref = `heads/${headRef}`;

      return githubScript.github.rest.git.deleteRef({
        repo,
        owner,
        ref,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export const deleteBranch = async (
  githubScript: GithubScriptInput,
  target: string,
) => {
  await _deleteBranch(githubScript);
};
