'use strict';

//coding challenge 1

// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// solution

const Car = function name(make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed, 'accelerate');
};

Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(this.speed, 'brake');
};

// const car1 = new Car('BMW', 100);

// car1.accelerate();

// coding challenge 2

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    console.log(
      `'${this.make.toUpperCase()}' going at ${this.speed / 1.6} mi/h`
    );
  }
  set speedUS(usrSpeed) {
    this.speed = usrSpeed * 1.6;
    console.log(`'${this.make.toUpperCase()}' going at ${this.speed} mi/h`);
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `'${this.make.toUpperCase()}' going at ${this.speed / 1.6} mi/h`
    );
  }
  brake() {
    this.speed -= 10;
    console.log(
      `'${this.make.toUpperCase()}' going at ${this.speed / 1.6} mi/h`
    );
  }
}

// const ford = new Car2('Ford', 120);
// console.log(ford);
// ford.speedUS;
// ford.speedUS = 140;
// ford.accelerate();
// ford.brake();

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// solution

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`
  );
};
// const tesla = new EV('Tesla', 100, 50);
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.brake();

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// solution

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} going at ${this.speed} km/h with a charge of ${this._charge}%`
    );
    return this;
  }
  brake() {
    this.speed -= 10;
    console.log(
      `'${this.make.toUpperCase()}' going at ${this.speed / 1.6} mi/h`
    );
  }
}

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }
  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    console.log(`charge is ${this._charge}%`);
    return this;
  }
}

const tataEv = new EVCl('TataEV', 100, 60);
console.log(tataEv);
tataEv.accelerate().chargeBattery(50);
