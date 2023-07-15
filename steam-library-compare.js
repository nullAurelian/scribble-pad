/**
 * Fetches a user's Steam library from Steam ID number. 
 * Returns a JSON of game Library
 * @param {Number} userID Steam ID number
 */
function getSteamUserLibraryData(userID) {
    fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/`)
	.then(res => {
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});
}

/**
 * Get title associated with the application ID number
 * @param {Number} appID application ID number
 */
function getSteamGameTitle(appID)
{
    fetch(`https://store.steampowered.com/api/appdetails?appids=${appID}`,{method: 'GET', mode: "no-cors"})
	.then(res => {
        if(!res.ok)
        {
            throw new Error(`ERROR DETECTED STATUS ${res.status} : ${res.statusText}`);
        }
		res = res.json();
	})
	.catch(err => {
		console.log(err);
	});
}

getSteamGameTitle(9420);