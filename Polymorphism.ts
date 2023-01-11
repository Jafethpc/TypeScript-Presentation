// Define a new parent class 'Animal'
class Animal {
  name: string;
  // Constructor which accepts a parameter theName and sets theName to name property
  constructor(theName: string) {
    this.name = theName;
  }
  // move method is defined in the parent class that will log meters moved.
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// Create 2 new classes using Inheritence and inherit the 'Animal' class
// ---------------------------------------------------------------------
// Both classes will call the parent constructor passing in the name and
// create a move function that will log what animal noise it makes when it moves and
// also overrides the 'Animal' class method by passing in the 'distanceInMeters' value.
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

// Creating 2 new variables with the 'Snake' and 'Horse' class
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Horse");

sam.move(); // "Slithing..."   "Sammy the Python moved 5m."

// Here we can also see that we are overriding the default value of the move method in the 'Horse'
// class by running the move method with the 35 number that overrides the default value of 45
// which represents polymorphism
tom.move(35); // "Galloping..."  "Tommy the Horse moved 35m."
