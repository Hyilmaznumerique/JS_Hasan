// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);


// exerice2 à 13
let team = {};

team.players = []; 
team.games = [];

team.players.push({ firstName: "Pablo", lastName: "Sanchez", age: 11 }); 
team.players.push({ firstName: "Lily", lastName: "Smith", age: 12 }); 
team.players.push({ firstName: "Tom", lastName: "Brown", age: 10 });

team.games.push({ opponent: "Broncos", teamPoints: 42, opponentPoints: 27 }); 
team.games.push({ opponent: "Tigers", teamPoints: 35, opponentPoints: 30 }); 
team.games.push({ opponent: "Lions", teamPoints: 50, opponentPoints: 45 });

team.addPlayer = function(firstName, lastName, age) { 
    this.players.push({ firstName, lastName, age }); 
};

team.addGame = function(opponent, teamPoints, opponentPoints) { 
    this.games.push({ opponent, teamPoints, opponentPoints });
};

team.addPlayer("John", "Doe", 13); 
team.addGame("Eagles", 40, 35);

let totalTeamPoints = team.games.reduce((sum, game) => sum + game.teamPoints, 0); 
console.log("Total des points de l'équipe : " + totalTeamPoints);

let totalOpponentPoints = team.games.reduce((sum, game) => sum + game.opponentPoints, 0); 
let averageOpponentPoints = totalOpponentPoints / team.games.length; 
console.log("Moyenne des points de l'équipe adverse : " + averageOpponentPoints);

function findOldestPlayer(players) { 
    return players.reduce((oldest, player) => (player.age > oldest.age ? player : oldest), players[0]); }

    let oldestPlayer = findOldestPlayer(team.players); 
    console.log("Le joueur le plus âgé : " + oldestPlayer.firstName + " " + oldestPlayer.lastName);

    team.players.sort((a, b) => a.lastName.localeCompare(b.lastName)); 
    console.log("Joueurs triés par ordre alphabétique : "); console.log(team.players);