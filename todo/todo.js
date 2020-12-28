const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    const data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error("Could not save", err);
        }
    })
};

const getDataDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch {
        listToDo = [];
    }
}

const createTask = description => {
    getDataDB();

    const lastTask = listToDo[listToDo.length - 1];
    const idTask = lastTask ? lastTask.id + 1 : 1;

    const todo = {
        id: idTask,
        description,
        complete: false
    };

    listToDo.push(todo);

    saveDB();

    return todo;
}

const updateTask = (id, state) => {
    getDataDB();
    let task = listToDo.find(task => task.id === id);

    if (task) {
        task.complete = state === 'true' ? true : false;
        saveDB();
        return task;
    }
}

const deleteTask = (id) => {
    getDataDB();

    const task = listToDo.find(task => task.id === id);
    const index = listToDo.indexOf(task);

    if (index > -1) {
        listToDo.splice(index, 1);
        saveDB();
        return 'delete successfull';
    }
}

const getListToDo = () => {
    getDataDB();
    return listToDo;
}

module.exports = {
    createTask,
    getListToDo,
    updateTask,
    deleteTask
}