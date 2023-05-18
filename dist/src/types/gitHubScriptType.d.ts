import { context } from '@actions/github';
declare const ocktokit: import("@octokit/core").Octokit & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
} & import("@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types").RestEndpointMethods & import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api;
export interface GithubScriptInput {
    context: typeof context;
    github: {
        rest: typeof ocktokit;
    };
}
export {};
