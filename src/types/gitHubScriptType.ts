import {context} from '@actions/github';
import {Octokit} from '@octokit/rest';

/*
 * actions/github-script의 github object는 Octokit을 사용
 * GithubScriptInput: https://github.com/actions/github-script#actionsgithub-script
 */
const ocktokit = new Octokit();
export interface GithubScriptInput {
	// context.payload.pull_request: https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
	context: typeof context;

	// github.rest : https://octokit.github.io/rest.js/v18

	github: {
		rest: typeof ocktokit;
	};
}
