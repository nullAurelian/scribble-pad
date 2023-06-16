import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({})

let repos = await octokit.request('GET /users/nullAurelian/repos',{})
let testvariable = '';

alert(repos);