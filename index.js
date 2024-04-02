import inquirer from 'inquirer';
let myBalance = 30000;
let mypin = 4444;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code");
    let operatorAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select any one of them",
            type: "list",
            choices: ["Withdraw", "CheckBalance", "Quickaccess"]
        }
    ]);
    if (operatorAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter your withdraw amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log(`congratulation you sucessfully withdraw ${amountAns.amount} amount`);
            myBalance -= amountAns.amount;
            console.log("Now your remaining balance is " + myBalance);
        }
        else if (amountAns.amount > myBalance) {
            console.log("unable to process trasition");
        }
    }
    else if (operatorAns.operation === "Quickaccess") {
        let quickAns = await inquirer.prompt([
            {
                name: "quick",
                message: "select any one of quickaccess",
                type: "list",
                choices: ["5000", "10000", "20000", "30000"]
            }
        ]);
        operatorAns.operation === quickAns.quick;
        console.log(`congratulation you sucessfully withdraw ${quickAns.quick} amount`);
        let output = myBalance - quickAns.quick;
        console.log(" Now your remaining amount is ", output);
    }
    else if (operatorAns.operation === "CheckBalance") {
        console.log("Your balance is " + myBalance);
    }
}
else {
    console.log("Are you forget your pin?");
}
