#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const passVar = await inquirer.prompt([
    {
        type: "password",
        message: "Enter Your password (LowerCase)",
        name: "myPass",
    },
]);
if (passVar.myPass === "hamdan") {
    let continueCalculating = true;
    while (continueCalculating) {
        const calculator = await inquirer.prompt([
            { message: "Enter First Number", type: "number", name: "firstNumber" },
            { message: "Enter Second Number", type: "number", name: "secondNumber" },
            {
                message: "Choose your Operator",
                type: "list",
                name: "operator",
                choices: ["addition", "subtraction", "multiplication", "division"],
            },
        ]);
        if (calculator.operator === "addition") {
            console.log(chalk.green(`${calculator.firstNumber} + ${calculator.secondNumber} = ${calculator.firstNumber + calculator.secondNumber}`));
        }
        else if (calculator.operator === "subtraction") {
            console.log(chalk.red(`${calculator.firstNumber} - ${calculator.secondNumber} = ${calculator.firstNumber - calculator.secondNumber}`));
        }
        else if (calculator.operator === "multiplication") {
            console.log(chalk.blue(`${calculator.firstNumber} * ${calculator.secondNumber} = ${calculator.firstNumber * calculator.secondNumber}`));
        }
        else if (calculator.operator === "division") {
            console.log(chalk.yellow(`${calculator.firstNumber} / ${calculator.secondNumber} = ${calculator.firstNumber / calculator.secondNumber}`));
        }
        const { wantToContinue } = await inquirer.prompt([
            {
                message: "Do you want to perform another calculation?",
                type: "confirm",
                name: "wantToContinue",
            },
        ]);
        continueCalculating = wantToContinue;
    }
    console.log(`Thanks for using. Code Written by ${chalk.cyan("Muhammad Hamdan Bhatti")}`);
}
else {
    console.log("Enter correct password");
}
