// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
// A driveToWorkmethod, driveAroundTheWorldmethod, and runErrandsmethod. Each of these methods
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new
// mileage.
// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = 200;
    }
    driveToWorkmethod (distance){
        this.mileage += distance;
        console.log("Drive to work: "+`Old mileage: 200 | New Mileage: ${this.mileage}`);
        return this
    }
    driveAroundTheWorldmethod (distance){
        this.mileage += distance; //this.mileage + distance doesn't calculated total traveled 
        console.log("Drive around the world: " +`Old mileage: 200 | New Mileage: ${this.mileage}`);
        return this
    }
    runErrandsmethod (distance){
        this.mileage += distance;
        console.log("Runnning Errands: "+`Old mileage: 200 | New Mileage: ${this.mileage}`);
        return this
    }
}
let newMileage = new Car ("Nissan", "Altima", 2018,"red")
newMileage.driveAroundTheWorldmethod(123);
newMileage.driveToWorkmethod(20);
newMileage.runErrandsmethod(15);
console.log(newMileage)