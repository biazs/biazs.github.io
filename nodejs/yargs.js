const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')


//Description: limpar o sofa
//status: BACKLOG, IN_PROGRESS, DONE

yargs.command({
    command:'add',
    describe:'Add a new task',
    builder:{
        name:{
            describe:'Task name',
            demandOption:true,
            type:'string'
        },
        description:{
            describe:'Task description',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log(chalk.green.bold.inverse('Creating a new task: '))
        console.log(`Name: ${argv.name}`)
        console.log(`Description: ${argv.description}`)
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
//console.log(yargs.argv)
yargs.parse();