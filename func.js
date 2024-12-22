const {Task} = require('./taskConst.js')
const fs = require('fs');
function add(desc) {
  // criar um novo arquivo json
  // com um objeto contendo o nome da tarefa, status, id, createdAt(data), updatedAt(data)
  let Id = require('./jsons/Id.json');

  let New_Task = new Task(desc);
  New_Task.id = Id.id;
  
  fs.writeFile(
    `./tasks/${New_Task.id}.json`,
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

  try {
    Tsk = require(`./tasks/${id}.json`); //Fecth o arquivo json da tarefa a ser modifcada
  }catch(err) {
    console.log(err);
  }
  Tsk.description = desc;
  Tsk.updatedAt = new Date();
  
  
  fs.writeFile(
    `./tasks/${id}.json`,
    JSON.stringify(Tsk),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log("Done writing");
    });
}

function deleteTask(id) { // delete task, deletando tarefa
  fs.unlink(`./tasks/${id}.json`,
    err => {
      if(err) throw err;

      console.log('Task deleted')
    })
}
module.exports = { add, updateTask, deleteTask }