const chalk = require('chalk');

const validator = require('validator'); // This module is for email validation

// console.log(chalk.bgRed('Tejas is'));

const result = validator.isEmail("tejasvispute@gmail.com");//. added a email to check it is valid or not

console.log(result ? chalk.bgGreen(result) : chalk.bgRed(result)); //condition added for added email if valid then change bg to green otherwise change bg to red