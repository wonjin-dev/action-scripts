import { GithubScriptInput } from './types/gitHubScriptType';

async function _autoAssign(githubScript: GithubScriptInput) {
  try {
    const target =
      githubScript.context.payload.pull_request ||
      githubScript.context.payload.issue;

    if (target === undefined) {
      throw new Error("Can't get payload. Check you trigger event");
    }
    const {
      assignees,
      number,
      user: { login: author, type },
    } = target;

    if (assignees.length > 0 || type === 'Bot') {
      return;
    }

    return await githubScript.github.rest.issues.addAssignees({
      owner: githubScript.context.repo.owner,
      repo: githubScript.context.repo.repo,
      issue_number: number,
      assignees: [author],
    });
  } catch (err) {
    console.log(err.message);
  }
}

export const autoAssign = async (githubScript: GithubScriptInput) => {
  await _autoAssign(githubScript);
};
