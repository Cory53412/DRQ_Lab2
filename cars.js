class Vehicle {//Parent Class.
    constructor(make, model, year) {
        //initialising Variables.
        this.make = make;
        this.model = model;
        this.year = year;
    }


    information() {//method to print make,miodel and year to the screen.
        console.log(` Make:${this.make}, Model: ${this.model},year:  ${this.year}`);
    }
}

class car extends Vehicle {//child class .
    constructor(make,model,year,door) {
        //invoking instructer class using super keyword.
      super(make,model,year);
      this.door = door; //initialising door.
    }

    information(){//method calls information() from parent class.
        super.information();
        console.log(`Doors: ${this.door}`);// Outputs number of doors to console.
    }
}

let myVehicle = new Vehicle('audi', 'r8', 2018);//creating an instance of the parent class.
let newVehicle = myVehicle.information();//assigning data from myVehicle to newVehicle to print to screen.
console.log(newVehicle);//prints data to console.

let myCar = new car('VW', 'r10',2019,4);//creating instance of chiild class
let newCar = myCar.information();//Assigning data to newCar & printing to console from info() function.
