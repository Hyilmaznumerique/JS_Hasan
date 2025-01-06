// you can write js here
console.log('exo-2');
// 1/Créer une variable assignée à un objet Date 
const myDate = new Date();

// Variables de type String pour les messages 
const weekdayMessage = "C'est un jour de semaine."; 
const weekendMessage = "C'est le weekend.";

// 2. Crée une nouvelle variable correspondant au jour et à l'heure actuel de la semaine 
let currentDay; 
let currentHour;

// Variable booléenne pour activer ou désactiver le mode test 
const isTesting = true;

if (isTesting) {
    // Si isTesting est true, demander le jour et l'heure à l'utilisateur
    currentDay = parseInt(prompt("Entrez un jour de la semaine (0 pour dimanche, 6 pour samedi) :")); 
    currentHour = parseInt(prompt("Entrez l'heure actuelle (0-23) :")); 
} else {
    // Sinon, utiliser le jour et l'heure actuels 
    currentDay = myDate.getDay(); 
    currentHour = myDate.getHours(); 
}

// 3. Tester si le jour actuel est un jour de semaine ou du weekend 
if (currentDay === 0 || currentDay === 6) { 
    console.log(weekendMessage); 
} else { 
    // 4. Ajouter la condition pour le vendredi après 17h 
    if (currentDay === 5 && currentHour >= 17) { 
        console.log(weekendMessage); 
    } else if (currentDay === 1 && currentHour < 9) { 
    // Ajouter la condition pour le lundi avant 9h 
        console.log(weekendMessage); 
    } else { 
        console.log(weekdayMessage); 
    }
}