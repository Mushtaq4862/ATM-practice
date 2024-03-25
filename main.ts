// let a: number = 5
// let b: number = 2

// let c: number;
// c = ++a + a++ + --b + b-- + a + b++ + b
// console.log("c:", c);

import inquirer from"inquirer";

const answers : {
    numberOne: number
    numberTwo: number
    operator: string
}
= await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first no:"

},
{
    type: "number",
    name: "numberTwo",
    message: "kindly enter your second no:"
    
},
{
    type: "list",
    name: "operator",
    choices: ["*", "+", "-", "/"],
    message: "select operator:"
    
    
}
]);

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
    let result: number = 0;
    if(operator === "+"){
        result = numberOne + numberTwo
    }else  if(operator === "-"){
        result = numberOne - numberTwo
    }  if(operator === "/"){
        result = numberOne / numberTwo
    }  if(operator === "*"){
        result = numberOne * numberTwo
    }

    console.log("your result is :", result)
}else{

}

    