const argv = require('yargs')
    .command('create', 'Create and save de task in database.', {
        description: {
            alias: 'd',
            demand: true,
            desc: 'Is a short description of the task.'
        },
    })
    .command('update', 'update and save de task in database.', {
        id: {
            alias: 'i',
            demand: true,
            desc: 'Is a id number of the task.'
        },
        complete: {
            alias: 'c',
            default: true,
            desc: 'Is the state of the task, complete or pending.'
        }
    })
    .command('delete', 'delete taks for number id', {
        id: {
            alias: 'i',
            demand: true,
            desc: 'Is a id number of the task.'
        }
    })
    .command('list', 'list of task in database.', {})
    .help()
    .argv;

module.exports = {
    argv
}