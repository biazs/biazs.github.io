const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
    command:'add',
    describe:'Add a new task',
    handler: function(){
        console.log(chalk.green('Creating a new task'))
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a task',
    handler: function(){
        console.log(chalk.red('Removing a task'))
    }
})
yargs.command({
    command:'list',
    describe:'List a task',
    handler: function(){
        console.log(chalk.yellow('List tasks'))
    }
})
yargs.command({
    command:'read',
    describe:'Read a task',
    handler: function(){
        console.log(chalk.blue('Read a task'))
    }
})


// console.log(process.argv)
console.log(yargs.argv)