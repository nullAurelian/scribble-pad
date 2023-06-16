import { request } from "@octokit/request";

// const octokit = new request({
//      auth: `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`,
//      baseUrl: "https://api.github.com",
// }); //Expires 2023/06/21

const result = await request(
    "GET /users/nullAurelian/repos", 
    {headers: {authorization: "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" }}
    );
console.log(result);
// async function getThings(){
//     const repos = await octokit.request('GET /user',{})
//     console.log(repos);
// }

// getThings();