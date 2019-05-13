const _ = require('lodash')
const chalk = require('chalk')

//console.log(process.argv)
const comando = process.argv[2].toUpperCase();
const title = process.argv[3];

if(comando=== 'ADD'){
    console.log(chalk.green.inverse(`addin new text -> ${title}`))
}else if(comando==='REMOVE'){
    console.log(chalk.red.inverse('removing a text'))
}
else{
    console.log(chalk.blue.inverse('command not found'))
}