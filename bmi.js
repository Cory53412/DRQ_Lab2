class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    calculateBMI(){
        let bmi = this.weight/(this.height ** 2);
        return bmi;
    }

}

let MyBMI = new BMI(2, 90);
let calculatedBMI = MyBMI.calculateBMI();
console.log(calculatedBMI);