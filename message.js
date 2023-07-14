
async function getRepoData(username) {
    const result = await fetch(`https://api.github.com/users/${username}/repos`);
    console.log("--Awaiting results--");
    console.log(result);
    return result;
};
function repoToElements(repositoryJson) {
    const newDiv = document.createElement("ul");
    const newContent = document.createTextNode(`${repositoryJson.name} : ${repositoryJson.description}`);
    newDiv.appendChild(newContent);
    document.body.append(newDiv);
};

const reposJson = getRepoData("nullAurelian");

console.log("Output repos:");
console.log(reposJson.then((Response) => Response.text()));


// for (const x of JSON.parse(reposJson)) {
//     repoToElements(x);
// }