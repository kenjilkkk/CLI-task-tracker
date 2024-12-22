const {Task} = require('./taskConst.js')

function add(desc) {
  // criar um novo arquivo json
  // com um objeto contendo o nome da tarefa, status, id, createdAt(data), updatedAt(data)
  let Id = require('./jsons/Id.json');

  let New_Task = new Task(desc);
  New_Task.id = Id.id;

  const fs = require('fs');
  
  fs.writeFile(
    `./tasks_jsons/${New_Task.id}.json`,
    JSON.stringify(New_Task),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });

  Id.id += 1;

  fs.writeFile(
    `./jsons/Id.json`,
    JSON.stringify(Id),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });
}

function updateTask(id ,desc) {
  let Tsk;
  const fs = require('fs')
  try {
    Tsk = require(`./tasks_jsons/${id}.json`); //Fecth o arquivo json da tarefa a ser modifcada
  }catch(err) {
    console.log(err);
  }
  Tsk.description = desc;
  Tsk.updatedAt = new Date();
  
  
  fs.writeFile(
    `./tasks_jsons/${id}.json`,
    JSON.stringify(Tsk),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });
}

module.exports = { add, updateTask }