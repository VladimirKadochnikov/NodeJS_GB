// console.log(process.argv);
// const colors = require('colors');
import colors from 'colors';
const args = process.argv.slice(2);
const [ userName ] = args;

console.log(args);
console.log(`Hello ${colors.green(userName)}`);
