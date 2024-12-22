const a = require('./add');
const T = require('./taskConst')

const args = process.argv.slice(2); //argumentos do command line


if(args[0] === 'add') {
  a.add(args[1]);
} 




//Encontrar alguma forma de dar continuação no ID, no momento estao compartilhando o ID = 0

