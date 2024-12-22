const { add, updateTask, deleteTask, changeStatus, list } = require('./func.js');
const { Task } = require('./taskConst.js')

const args = process.argv.slice(2); //argumentos do command line


if(args[0] === 'add') {
  add(args[1]);
}else if(args[0] === 'update') {
  updateTask(args[1], args[2] )
} else if(args[0] === 'delete') {
  deleteTask(args[1]);
}else if(args[0] === 'mark-in-progress') {
  changeStatus('in-progress', args[1]);
}else if(args[0] === 'mark-done') {
  changeStatus('done', args[1]);
}else if(args[0] === 'mark-todo') {
  changeStatus('todo', args[1]);
}else if(args[0] === 'list'){
  list(args[1])
}






//Encontrar alguma forma de dar continuação no ID, no momento estao compartilhando o ID = 0

