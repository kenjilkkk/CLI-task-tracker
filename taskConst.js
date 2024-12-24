function Task(str) {
  let date = new Date();
  this.description = str;
  this.status = 'no status';
  this.createdAt  = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() ;
  this.id = 0;
  this.updatedAt = null;

}
module.exports = { Task }