// you can write js here
console.log('hello from file');
// exercice n1
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
let kelvin = 293;

console.log(kelvin);
// 2/ Convertissons Kelvin en Celsius en soustrayant 273 de la variable kelvin. 
// Stockez le résultat dans une autre variable, nommée celsius.
let celsius = kelvin - 273;
console.log(celsius);
// 3/Utilisez cette équation pour calculer Fahrenheit, puis stockez la réponse dans une variable nommée fahrenheit.  
// Dans l'étape suivante, nous arrondirons le nombre enregistré dans fahrenheit. 
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
// 4/Utilisez la méthode .floor() de l'objet Math intégré pour arrondir la température Fahrenheit. 
// Enregistrez le résultat dans la variable fahrenheit. 
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
