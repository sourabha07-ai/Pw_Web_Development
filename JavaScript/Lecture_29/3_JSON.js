 // 1. Define the superHeroes object
const superHeroes = { 
  "squadName": "Super hero squad", 
  "homeTown": "Metro City", 
  "formed": 2016, 
  "secretBase": "Super tower", 
  "active": true, 
  "members": [ 
    { 
      "name": "Molecule Man", 
      "age": 29, 
      "secretIdentity": "Dan Jukes", 
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"] 
    }, 
    { 
      "name": "Madame Uppercut", 
      "age": 39, 
      "secretIdentity": "Jane Wilson", 
      "powers": [ "Million tonne punch", "Damage resistance", "Superhuman reflexes" ] 
    }, 
    { 
      "name": "Eternal Flame", 
      "age": 1000000, 
      "secretIdentity": "Unknown", 
      "powers": [ "Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel" ] 
    } 
  ] 
};

// 2. Print the values using console.log()
console.log("Hometown:", superHeroes.homeTown);
console.log("Madame Uppercut's 3rd power:", superHeroes.members[1].powers[2]);