/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */
//A closure gives an inner function access to an outer function's scope. You're defining a function inside of another function.

function makeClosure() {
  let name = "Samantha";
  function displayName() {
    return name;
  }
  return displayName;
}
var myClosure = makeClosure();
myClosure();

/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}
//'Count' is initialized with a let because let allows you to declare a variable that is limited to the scope of a block statement whereas var defines the variable globally.
//Since 'count' is initialized with let it becomes block scoped, meaning it only exists and is accessible inside of the curly braces and cannot be access outside of them. If var were used it would be globally scoped and accessible both inside and outside of the curly braces.
/*

TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When .this is not inside of a declared object it defaults to the global(window) object.
* 2. Implicit Binding -  When dot notation is used. Whatever is to the left of the dot become the context for this inside of the function
* 3. New Binding -  When the 'new' keyword is used as a contructor, .this is bound to the new object that is created.
* 4. Explicit Binding - When you use add.whatever() the first param is what .this is bound to. Call can take in any number of params. Apply works almost the same way except it can only take in 2 params. Both call and apply are invoked immediately. The parameters in bind() are the same as call() butit is not invoked immediatlely. Instead, bind() returns a function where .this is already bound (making it useful when you don't know all of the arguments beforehand).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this); //returns Window{...}

// Principle 2

// code example for Implicit Binding
const user = {
  name: "Samantha",
  age: 33,
  greet() {
    alert(`Hello, my name is ${this.name}`);
  },
};
user.greet();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
function greet() {
  return `Hello, my name is ${this.name}`;
}
const user = {
  name: "Samantha",
  age: 33,
};
/*
TASK 4 🚀
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
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {
  console.log(`${this.name} was removed from the game.`);
};
const witch = new GameObject({
  createdAt: "Today",
  name: "Tammra",
  dimensions: {
    length: 2,
    width: 2,
    height: 4,
  },
});
console.log(witch);
console.log(witch.destroy());
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  this.healthPoints = attributes.healthPoints;
  GameObject.call(this, attributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
};
const Stick = new CharacterStats({
  healthPoints: 100,
  createdAt: "2 days ago",
  name: "Mystic",
  dimensions: {
    length: 3,
    width: 2,
    height: 3,
  },
});
console.log(CharacterStats);
console.log(CharacterStats.takeDamage());
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes) {
  this.name = attributes.name;
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = this.language;
  GameObject.call(this, attributes);
  CharacterStats.call(this, attributes);
}
Humanoid.prototype = Object.new(Humanoid.prototype);
Humanoid.prototype.appearance = function () {
  console.log(`${this.name} offers a greeting in ${this.language}`);
};

const witch = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 75,
  name: "Freya",
  team: "Coven",
  weapons: ["Wand of Destruction"],
  language: "Theban",
});
const warlock = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 3,
  },
  healthPoints: 80,
  name: "Vincent",
  team: "Coven",
  weapons: ["Staff of the Ancestors"],
  language: "Theban",
});
const vampire = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 3,
  },
  healthPoints: 100,
  name: "Niklaus",
  team: "Vampires",
  weapons: ["Fangs"],
  language: "common language",
});
const werewolf = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 2,
  },
  healthPoints: 85,
  name: "Hayley",
  team: "Werewolves",
  weapons: ["Fangs", "Claws"],
  language: "common language",
});
/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
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
*/

/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */

//I tried Googling how to do this but I don't understand how to do this. I honestly don't know where to start with this.
