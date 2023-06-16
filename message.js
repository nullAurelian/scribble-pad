
let username = "nullAurelian";
const result = await fetch(`https://api.github.com/users/${username}/repos`);

console.log(result);

const reposJson = await result.json();

function repoToElements(repositoryJson) {
    //let parsedJson = JSON.parse(repositoryJson);
    const newDiv = document.createElement("ul");
    const newContent = document.createTextNode(`${repositoryJson.name} : ${repositoryJson.description}`);
    newDiv.appendChild(newContent);
    document.body.append(newDiv);
};

for (const x of reposJson) {
    repoToElements(x);
}