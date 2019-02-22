// constructor function which can be used to create "digitalpal" objects
const DigitalPal = function() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;

  // method which feeds the digitalpal when they are hungry and sets them to sleepy
  this.feed = () => {
    if (this.hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    }
    else {
      console.log("No thanks, I'm full.");
    }
  };

  // method which puts the digitalPal to sleep when they are sleepy, increases
  // their age by one, and sets them to bored
  this.sleep = () => {
    if (this.sleepy) {
      console.log("ZZzzZZZzzZZz~~");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
    else {
      console.log("No way! I'm not tired!");
    }
  };

  // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
  this.play = () => {
    if (this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    }
    else {
      console.log("Not right now. Maybe later?");
    }
  };

  // method which is called in "this.sleep" to increase the age of the digitalpal by one
  this.increaseAge = () => {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + " old!");
  };
};

// Create a new animals object to contain our new Digital Pals
const animals = {};

// creates a new DigitalPal object with the name "dog"
animals.dog = new DigitalPal();

// adds the property "outside" to the "dog" object and sets it to false
animals.dog.outside = false;

// adds the method "bark" to the "dog" object which prints a message to the screen
animals.dog.bark = () => {
  console.log("Woof! Woof!");
};

// adds the method "letoutside" to the "dog" object which lets "dog" outside when it is outside
animals.dog.letOutside = () => {
  if (!this.outside) {
    console.log("Yay! I love the outdoors!");
    this.outside = true;
    this.bark();
  }
  else {
    console.log("We're already outside though...");
  }
};

// adds the method "letInside" to the "dog" object which lets "dog" inside when it is outside
animals.dog.letInside = () => {
  if (this.outside) {
    console.log("Aww... Do I have to?");
    this.outside = false;
  }
  else {
    console.log("We're already inside though...");
  }
};

// creates a new DigitalPal object with the name "cat"
animals.cat = new DigitalPal();

// adds the property "housequality" to the "cat" object
animals.cat.houseQuality = 100;

// adds the "meow" method to the "cat" object which prints a message to the screen
animals.cat.meow = () => {
  console.log("Meow! Meow!");
};

// adds the "destroyfurniture" method to the "cat" object which decreases the "animals.cat.housequality" value by ten
animals.cat.destroyFurniture = () => {
  if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  }
  else {
    console.log("I've already destroyed it all!");
  }
};

// adds the "buyNewFurniture" method to the "cat" object which increases the "animals.cat.houseQuality" value by fifty
animals.cat.buyNewFurniture = () => {
  this.houseQuality += 50;
  console.log("Are you sure that's a good idea?");
};

// Grabbing command line arguments for animal and method
const animal = process.argv[2];
const method = process.argv[3];

// try calling your chosen animal and method from the terminal example: 'node tamagotchi-this dog letInside'
animals[animal][method]();
