/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(details){
  this.createdAt = details.createdAt,
  this.name = details.name,
  this.dimensions = details.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(details){
  GameObject.call(this, details),
  this.healthPoints = details.healthPoints
}

CharacterStats.prototype = Object.create(GameObject.prototype); //copyes GO prototype to CS prototype

CharacterStats.prototype.takeDamage = function() { //add another method to CS prototype
  return `${this.name} took damage`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(details) {
  CharacterStats.call(this, details), //gets properties transferred to humanoid from CS (and hence from GO)
  this.team = details.team,
  this.weapons = details.weapons,
  this.language = details.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


// team, weapons, language,    healthpoints

//technological villian, so laserbeam, rocket, sonic blas
function Villian(details){ 
  Humanoid.call(this, details)
}

Villian.prototype = Object.create(Humanoid.prototype);

function randomItemFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
} //stole from internet, but takes some random index
//generate a random float from 0 to 1 exclusive to 1, so let's say .5
//then does .5*length of array, which (lets 3), so ends up at 1.5, rounds down to 1, okay makes sense

Villian.prototype.attack = function(enemy, weapon) {
  let damage = 0;
  if (weapon == "Rocket") {
    damage = 20;
  } else if (weapon == "laser") {
    damage = 15;
  } else if (weapon == "sonic beam") {
    damage = 30;
  } else {
    damage = 0; //someone messed up, technically don't need this line
  }
  enemy.healthPoints -= damage;
  return `${this.name} [${this.healthPoints}] uses their ${this.weapon} to deal ${damage} to ${enemy.name} [${enemy.healthPoints}]`;
}

function Hero(details){ //physical hero, so groundSmash, punch, kick
  Humanoid.call(this, details)
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.groundSmash = function(enemy, weapon) {
  //writing if statment a different way
  let damage = 0;
  (weapon == "fist") ? damage = 
  return `${this.name} [${this.healthPoints}] smashes the ground and injures ${enemy.name} [${enemy.healthPoints}]`;
}


const badGuy = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: Math.floor(Math.random() * 10+1),
    width: Math.floor(Math.random() * 10+1),
    height: Math.floor(Math.random() * 10+1),
  },
  healthPoints: Math.floor(Math.random() * 10+100),
  name: 'Johnny',
  team: 'The Unknown',
  weapons: [
    'Laser',
    'Rocket',
    'Sonic Beam'
  ],
  language: 'Elvish',
});