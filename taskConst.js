function Task(str) {
  this.description = str;
  this.status = 'no status';
  this.createdAt  = new Date();
  this.id = 0;
  this.updatedAt = null;

}
module.exports = { Task }