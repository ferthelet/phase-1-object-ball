function gameObject() {
    // contains and returns a nested object 
    return {
        home: {
            // points to a string of the team name.
            teamName: "Brooklyn Nets",
            // points to an array of strings that are that team's colors.
            colors: ["Black", "White"],
            // points to an object of players whose names (as strings) are the keys to a object containing their stats
            players: {
                "Alan Anderson": {
                    number: 0,
                    size: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    size: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    size: 17,
                    points: 27,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },  
                "Mason Plumlee": {
                    number: 1,
                    size: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    size: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            // points to a string of the team name.
            teamName: "Charlotte Hornets",
            // points to an array of strings that are that team's colors.
            colors: ["Turquoise", "Purple"],
            // points to an object of players whose names (as strings) are the keys to a object containing their stats
            players: {
                "Jeff Adrien": {
                    number: 4,
                    size: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    size: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    size: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    size: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    size: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }

    }
}

function homeTeamName() {
    // returns the name of the home team
    let object = gameObject();
    return object["home"]["teamName"];
}

function numPointsScored(playerName) {
    // takes in an argument of a player's name and returns the number of points scored for that player
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players};
    return allPlayers[playerName].points;
}

function shoeSize(playerName) {
    // takes in an argument of a player's name and returns the number of points scored for that player
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players};
    return allPlayers[playerName].size;
}

function teamColors(teamName) {
    // takes in an argument of the team name and returns an array of that teams colors.
    if (teamName === 'Brooklyn Nets') {
        return gameObject().home.colors;
    } else if (teamName === 'Charlotte Hornets') {
        return gameObject().away.colors;
    } else {
        return undefined;
    }
}

function teamNames() {
    //operates on the game object to return an array of the team names.
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers (teamName) {
    // takes in an argument of a team name and returns an array of the jersey number's for that team.
    let numbers = [];
    let teamPlayers = {};
    
    if (teamName === 'Brooklyn Nets') {
        teamPlayers = {...gameObject().home.players};
    } else if (teamName === 'Charlotte Hornets') {
        teamPlayers = {...gameObject().away.players};
    } else {
        return undefined;
    }
    for (let player in teamPlayers) {
        numbers.push(teamPlayers[player].number);
    }
    return numbers;
}

function playerStats(playerName) {
    // takes in an argument of a player's name and returns a object of that player's stats
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players};
    return allPlayers[playerName];
}

function bigShoeRebounds() {
    // return the number of rebounds associated with the player that has the largest shoe size.
    let largest = 0;
    let playerName = "";
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players};

    for (let player in allPlayers) {
        if (allPlayers[player].size > largest) {
            largest = allPlayers[player].size;
            playerName = player;
        }
    }
    return allPlayers[playerName].rebounds;
}

function mostPointsScored() {
    // Which player has the most points?
    let maxPoints = 0;
    let playerName = "";
    const allPlayers = {...gameObject().home.players, ...gameObject().away.players};

    for (let player in allPlayers) {
        if (allPlayers[player].points > maxPoints) {
            maxPoints = allPlayers[player].points;
            playerName = player;
        }
    }
    return playerName;
}

function winningTeam() {
    // Which team has the most points? 
    homePlayers = {...gameObject().home.players};
    awayPlayers = {...gameObject().away.players};    

    function sum(team) {
        totalPoints = 0;
        for (let player in team) {
            totalPoints += team[player].points;
        }
        return totalPoints;
    }
    return sum(homePlayers) > sum(awayPlayers) ? "Brooklyn Nets" : "Charlotte Hornets";
}

function playerWithLongestName() {
    // Which player has the longest name?
    longestName = "";

    
}

function doesLongNameStealATon() {
    // returns true if the player with the longest name had the most steals. 
}

let playerName = 'Jeff Adrien';
let teamName = 'Charlotte Hornets'; // Brooklyn Nets or Charlotte Hornets
console.log('Home team test: ', homeTeamName());
console.log(`${playerName} Points: ${numPointsScored(playerName)}`);
console.log(`${playerName} Shoe size: ${shoeSize(playerName)}`);
console.log(`Team "${teamName}" colors: ${teamColors(teamName)}`);
console.log('Teams names: ', teamNames());
console.log(`Team "${teamName}" numbers: ${playerNumbers(teamName)}`);
console.log(`${playerName} stats:`);
console.log(playerStats(playerName));
console.log("Largest shoes size player rebounds: ", bigShoeRebounds());
console.log("Which player has the most points? ", mostPointsScored())
console.log("Which team has the most points? ", winningTeam());


