import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `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`}) //Expires 2023/06/21

const repos = await octokit.request('GET /users/nullAurelian/repos',{})

//alert(repos);
console.log(repos);