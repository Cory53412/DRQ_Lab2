class BMI{
    constructor(height, weight){
        //initilsing the arguments.
        this.height = height;
        this.weight = weight;
    }
    calculateBMI(){//carries out formula to calculate bmi.
        let bmi = this.weight/(this.height ** 2);
        return bmi;//returns bmi value.
    }

}

let MyBMI = new BMI(2, 90);//creating an instance of the class.
let calculatedBMI = MyBMI.calculateBMI();//Assigning returned value to a variable.
console.log(calculatedBMI);//printing value to screen.