class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    information() {
        console.log(` Make:${this.make}, Model: ${this.model},year:  ${this.year}`);
    }
}

class car extends Vehicle {
    constructor(make,model,year,door) {
      super(make,model,year);
      this.door = door; 
    }

    information(){
        super.information();
        console.log(`Doors: ${this.door}`);
    }
}

let myVehicle = new Vehicle('audi', 'r8', 2018);
let newVehicle = myVehicle.information();
console.log(newVehicle);

let myCar = new car('VW', 'r10',2019,4);
let newCar = myCar.information();
console.log(newCar);