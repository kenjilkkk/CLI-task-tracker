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
        console.log(`taskID: ${New_Task.id}`);
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
    return console.log('Id is invalid');
  }
  Tsk.description = desc;
  Tsk.updatedAt = new Date();
  Tsk.status = 'no status'
  
  
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

function changeStatus(status, id) {
  Tsk  = require(`./tasks/${id}.json`);
  Tsk.status = status;

  fs.writeFile(
    `./tasks/${id}.json`,
    JSON.stringify(Tsk),
    err => {
        // Checking for errors 
        if (err) throw err;

        // Success 
        console.log(`status: ${Tsk.status}`);
    });
}

async function list(status) {
  if(!status) {
    const { readdir } = require('node:fs/promises');
    try {
    const files = await readdir('./tasks');
    for (const file of files) {
      task = require(`./tasks/${file}`);

      console.log('--------------------------')
      console.log(`Task: ${task.description}`)
      console.log('--------------------------')
      console.log(`ID: ${task.id}`)
      console.log('--------------------------')
      console.log(`Status: ${task.status}`)
      console.log('--------------------------')
      console.log('')
    }

    } catch (err) {
      return console.error(err);
    }

  }else {
    const { readdir } = require('node:fs/promises');
    try {
    const files = await readdir('./tasks');
    for (const file of files) {
      task = require(`./tasks/${file}`);
      if(task.status === status){
      console.log('--------------------------')
      console.log(`Task: ${task.description}`)
      console.log('--------------------------')
      console.log(`ID: ${task.id}`)
      console.log('--------------------------')
      console.log(`Status: ${task.status}`)
      console.log('--------------------------')
      console.log('')     
      }
    }

    } catch (err) {
      return console.error(err);
    }
  } 

}
  




module.exports = { add, updateTask, deleteTask, changeStatus, list }
