import inquirer from "inquirer";
interface ansType{
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number

}
const answers: ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your Id: "

    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your PIN: "

    },
    {
        type: "list",
        name: "accontType",
        choices: ["current", "saving"],
        message: "select your account Type:",

    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdraw"],
        message: "select your transaction",
       

    },
    {
        type: "list",
        name: "withdraw method",
        choices: [500,1000,2000,10000,20000],
        message: "select your amount",
       

    },
    {
        type: "number",
        name: "amount",
        
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw"
        },

    },
])

if(answers.userId && answers.userPin){
    const balance = Math.floor(Math.random()*10000);
    console.log(balance)
    const Enteredamount= answers.amount;
    if (balance >= Enteredamount){
    const remaining = balance - Enteredamount;
    console.log("your remaining balance is", remaining)

    }else {
        console.log("Insuficient balance")
    }
}