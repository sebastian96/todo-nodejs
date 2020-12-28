require('colors');
const argv = require('./config/yargs').argv;
const { createTask, getListToDo, updateTask, deleteTask } = require('./todo/todo');

const command = argv._[0];

switch (command) {
    case 'create':
        console.log(createTask(argv.description));
        break;
    case 'list':
        const list = getListToDo();
        for (let task of list) {
            console.log('\n========== To do =========='.green);
            console.log(`ID: ${task.id}`);
            console.log(`Tarea: ${task.description}`);
            console.log(`estado: ${task.complete ? 'Completado' : 'Pendiente'}`);
            console.log('===========================\n'.green);
        }
        break;
    case 'update':
        console.log(updateTask(argv.id, argv.complete));
        break;
    case 'delete':
        console.log(deleteTask(argv.id));
        break;
    default:
        console.log('command is not valid');
}